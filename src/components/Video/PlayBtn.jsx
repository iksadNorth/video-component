import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FaPlay, FaPause } from "react-icons/fa";
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

export const PlayBtn = ({ value, videoRef }) => {
    const { theme } = useContext(ThemeContext);
    const [isPlaying, setIsPlaying] = useState(false);

    // 이벤트 정의
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // 재생되고 있는지 아닌지 확인.
    useEffect(() => {
        const videoEl = videoRef.current;
        if (!videoEl) return;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        videoEl.addEventListener("play", handlePlay);
        videoEl.addEventListener("pause", handlePause);
        return () => {
            videoEl.removeEventListener("play", handlePlay);
            videoEl.removeEventListener("pause", handlePause);
        };
    }, [videoRef]);
    
    // State와 비디오 기능 연동.
    useEffect(() => {
        const videoEl = videoRef.current;
        if (!videoEl) return;

        if (isPlaying) {
            videoEl.play();
        } else {
            videoEl.pause();
        }
    }, [isPlaying]);
    
    // 외부 요청값 반영
    useEffect(() => {
        setIsPlaying(value ?? false);
    }, [value]);
    
    return (<>
        <Button theme={theme} onClick={togglePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
    </>);
};
