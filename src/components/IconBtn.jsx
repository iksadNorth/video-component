import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from './Container';


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
    height: 1.5rem;
    line-height: 1.5rem;
    gap: 5px;
`;

export const IconBtn = ({children, icon, bgcolor, ...props}) => {
    return (<>
        <ButtonStyled bgcolor={bgcolor} {...props}>
            <IconContainer>
                {icon ? <FontAwesomeIcon icon={icon} /> : ''}
                <span className='text'>{children}</span>
            </IconContainer>
        </ButtonStyled>
    </>);
};
