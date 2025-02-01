import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from './Container';


const ButtonStyled = styled.button`
    border: none;
    border-radius: 10px;
    background-color: gray;

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

export const IconBtn = ({children, icon, ...props}) => {
    return (<>
        <ButtonStyled {...props}>
            <div>
                {icon ? <FontAwesomeIcon icon={icon} /> : ''}
                {children}
            </div>
        </ButtonStyled>
    </>);
};
