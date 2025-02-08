import styled from 'styled-components';

export const withCardAlign = (component) => (component ? styled(component) : styled.div)`
    display: grid;
    grid-template-columns: 170px auto;
    align-items: center;
    gap: 10px;

    & > .col-span-2 {
        grid-column: span 2;
    }
`;
