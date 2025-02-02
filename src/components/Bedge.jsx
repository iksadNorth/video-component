import styled from 'styled-components';
import { Container } from './Container';


const BedgeStyled = styled.img`
    border-radius: 50%;
    height: 100%;
    max-width: 100%;

    & + div {
        font-size: 1rem;
    }
`;

export const Bedge = ({children, ...props}) => {
    return (<>
        <Container row="true">
            <BedgeStyled {...props} />
            <div>
                {children}
            </div>
        </Container>
    </>);
};
