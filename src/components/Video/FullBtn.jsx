import React from 'react';
import styled from 'styled-components';
import { FaExpand } from "react-icons/fa";
import { useTheme } from '../Theme';
import { useVideo } from './VideoContext ';


const Button = styled.button`
  position: relative;
  top: 3px;
  padding: 5px;

  color: white;
  background-color: unset;
  border: none;

  cursor: pointer;
`;

export const FullBtn = ({  }) => {
    const videoRef = useVideo();
    const { theme } = useTheme();

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
