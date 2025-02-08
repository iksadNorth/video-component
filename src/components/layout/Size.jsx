import styled from 'styled-components';

export const withFitSize = (component) => (component ? styled(component) : styled.div)`
    height: fit-content;
    width: fit-content;
    padding: 5px;
`;
