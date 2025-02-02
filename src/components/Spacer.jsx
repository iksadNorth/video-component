import styled from 'styled-components';


export const Spacer = styled.div`
    ${({row}) => row ? 'margin-right' : 'margin-top'}: 100px;
`;
