import styled from 'styled-components';


// 모달 오버레이 스타일
const ModalOverlay = styled.div`
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;

    background: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1000;
`;

// 모달 콘텐츠 스타일
const ModalContent = styled.div`
    background: white;
    border-radius: 10px;
    
    padding: 20px;
    max-width: 100%;

    position: relative;
`;

export const Modal = ({ children }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                { children }
            </ModalContent>
        </ModalOverlay>
    );
};
