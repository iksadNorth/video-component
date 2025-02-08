import styled from 'styled-components';

export const withFitSize = (component) => (component ? styled(component) : styled.div)`
    height: fit-content;
    width: fit-content;
    padding: 5px;
`;

export const withFullSize = (component) => (component ? styled(component) : styled.div)`
    height: 100%;
    width: 100%;
    padding: 5px;
`;
