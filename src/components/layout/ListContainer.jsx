import { Container } from "../Container";
import styled from "styled-components";


export const ListContainer = styled(Container)`
    margin-left: auto;
    margin-right: auto;
    height:     ${ ({ style }) => style?.height || 'fit-content' };
    width:      ${ ({ style }) => style?.width || '100%' };

    display: grid;
    gap: 10px;

    @media(min-width: 2050px) {
        grid-template-columns: repeat(7, 1fr);
    }
    @media(min-width: 1750px) and (max-width: 2050px) {
        grid-template-columns: repeat(6, 1fr);
    }
    @media(min-width: 1450px) and (max-width: 1750px) {
        grid-template-columns: repeat(5, 1fr);
    }
    @media(min-width: 1150px) and (max-width: 1450px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media(min-width: 850px) and (max-width: 1150px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media(min-width: 550px) and (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media(min-width: 250px) and (max-width: 550px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
