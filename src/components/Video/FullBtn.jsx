import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaExpand } from "react-icons/fa";
import { ThemeContext } from '../Theme';


const Button = styled.button`
  position: relative;
  top: 3px;
  padding: 5px;

  color: white;
  background-color: unset;
  border: none;

  cursor: pointer;
`;

export const FullBtn = ({ videoRef }) => {
    const { theme } = useContext(ThemeContext);

    // 이벤트 정의
    const getFullScreen = () => {
        const videoEl = videoRef.current;
        videoEl.requestFullscreen();
    };
    
    return (<>
        <Button theme={theme} onClick={getFullScreen}>
            <FaExpand />
        </Button>
    </>);
};
