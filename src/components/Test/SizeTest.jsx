import styled, { keyframes } from 'styled-components';


const growShrinkHeight = keyframes`
    0%      { height: var(--min); }
    50%     { height: var(--max); }
    100%    { height: var(--min); }
`;

const growShrinkWidth = keyframes`
    0%      { width: var(--min); }
    50%     { width: var(--max); }
    100%    { width: var(--min); }
`;
const Container = styled.div`
    display: flex;
`;

export const SizeTest = styled.div`
    --max: ${({max}) => max || '600px'};
    --min: ${({min}) => min || '100px'};
    --frq: ${({frq}) => frq || '4s'};
    --bg: ${({bg}) => bg || 'lightgray'};

    width: var(--max); height: var(--max);
    background-color: var(--bg);

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        border: 1px solid black;
        animation: ${({row}) => row ? growShrinkHeight : growShrinkWidth} var(--frq) infinite ease-in-out;
    }
`;

export const SizeTestPair = ({children, row, ...props}) => {
    return (<>
        <Container>
            <SizeTest {...props}>
                {children}
            </SizeTest>
            <SizeTest row="true" {...props}>
                {children}
            </SizeTest>
        </Container>
    </>);
};
