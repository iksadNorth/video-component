import styled from 'styled-components';
import { Container } from './Container';


const BedgeStyled = styled.img`
    border-radius: 50%;
    height: ${({bdheight}) => bdheight ?? '100%'};
    max-width: 100%;
`;
const ContentStyled = styled.div`
    font-size: 1rem;
    width: 80%;
    word-break: break-word;
`;
const BedgeContainer = styled(Container)`
    align-items: ${({bdalign}) => bdalign ? `${bdalign} !important` : 'center'};
`;

export const Bedge = ({children, bdalign, bdheight, src, ...props}) => {
    src = src ?? 'https://cdn.pixabay.com/photo/2024/06/15/20/24/groovebox-8832172_1280.png';
    bdheight = bdheight ?? '40px';
    return (<>
        <BedgeContainer row="true" bdalign={bdalign} {...props}>
            <BedgeStyled bdheight={bdheight} src={src} {...props} />
            <ContentStyled>
                {children}
            </ContentStyled>
        </BedgeContainer>
    </>);
};
