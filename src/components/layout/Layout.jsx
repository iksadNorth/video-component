import styled from 'styled-components';

export const Layout = styled.div`
    display: grid;
    grid-template-columns: 170px auto;
    align-items: flex-start;
    gap: 10px;

    & > .col-span-2 {
        grid-column: span 2;
    }

    & > .row-span-2 {
        grid-row: span 2;
    }
`;
