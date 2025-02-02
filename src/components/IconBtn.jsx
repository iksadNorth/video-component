import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from './Container';


const Spacer = styled.span`
    margin-left: 0.25rem;
`;
const ButtonStyled = styled.button`
    border: none;
    border-radius: 10px;
    background-color: ${({bgcolor}) => bgcolor ?? 'gray'};

    &:hover {
        background-color: lightgray;
        transition: all 0.5s;
    }
`;
export const IconContainer = styled(Container)`
    display: table;

    & > * {
        margin: 2px;
        height: 1.70rem;
    }
`;

export const IconBtn = ({children, icon, bgcolor, ...props}) => {
    return (<>
        <ButtonStyled bgcolor={bgcolor} {...props}>
            <div>
                {icon ? <FontAwesomeIcon icon={icon} /> : ''}
                {(icon && children) ? <Spacer /> : ''}
                {children}
            </div>
        </ButtonStyled>
    </>);
};
