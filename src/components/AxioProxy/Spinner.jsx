import styled, { keyframes } from "styled-components";


// 회전 애니메이션 정의
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
// 스피너 스타일
const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh; width: 50vh;
`;
const SpinnerBody = styled.div`
    border: 24px solid rgb(145, 145, 145);
    border-top: 24px solid #3498db;
    border-radius: 50%;
    width: 50%; height: 50%;
    animation: ${spin} 1s linear infinite;  /* 회전 애니메이션 */
`;

export const Spinner = () => {
    return (
        <SpinnerWrapper>
            <SpinnerBody />
        </SpinnerWrapper>
    );
};
