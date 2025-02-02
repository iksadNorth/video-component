import styled from 'styled-components';
import { Container } from './Container';


const BedgeStyled = styled.img`
    border-radius: 50%;
    height: ${({bdheight}) => bdheight ?? '100%'};
    max-width: 100%;

    & + div {
        font-size: 1rem;
    }
`;
const BedgeContainer = styled(Container)`
    align-items: ${({bdalign}) => bdalign ? `${bdalign} !important` : 'center'};
`;

export const Bedge = ({children, bdalign, bdheight, ...props}) => {
    return (<>
        <BedgeContainer row="true" bdalign={bdalign}>
            <BedgeStyled bdheight={bdheight} {...props} />
            <div>
                {children}
            </div>
        </BedgeContainer>
    </>);
};
