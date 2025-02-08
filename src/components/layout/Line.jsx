import styled from 'styled-components';
import { withFullSize } from './Size';


export const Line = styled(withFullSize())`
    ${({row}) => row ? 'border-top' : 'border-right'}: solid 1px lightgray;
    padding: 0px;
`;
