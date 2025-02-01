import styled from 'styled-components';
import { Container } from './Container';


const BedgeStyled = styled.img`
    border-radius: 50%;
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
