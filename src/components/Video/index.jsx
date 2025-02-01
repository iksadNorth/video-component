import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaPlay, FaPause } from "react-icons/fa";

import { Button } from '../Button';
import { Container } from '../Container';
import { Volume } from './Volume';
import { ProgressBar } from './ProgressBar';


const BaseVideo = styled.video`
  width: 100%;
`;

export const Video = ({ srcUrl }) => {
    const videoRef = useRef(null);
    const [time, setTime] = useState(0);

    const togglePlayPause = () => {
        const video = videoRef.current;
        if(!video) return;

        if (video && video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };
    
    const handlePlayPause = () => {
        togglePlayPause();
    };

    const handleProgress = () => {
        const video = videoRef.current;
        if(!video) return;

        setTime(video.currentTime);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.defaultPrevented) {
                return; // 이미 이벤트가 실행되는 중이라면 아무 동작도 하지 않습니다.
            }
            
            const video = videoRef.current;
            if (!video) return;
            
            switch (event.key) {
                case "ArrowRight":
                    video.currentTime += 5;
                    break;

                case "ArrowLeft":
                    video.currentTime += -5;
                    break;
                
                case "ArrowUp":
                    video.volume += 0.05;
                    break;

                case "ArrowDown":
                    video.volume += -0.05;
                    break;
                    
                case " ":
                case "Enter":
                    togglePlayPause();
                    break;

                default:
                    return;
            }

            // 두 번 동작하는 것을 막기 위해 기본 동작을 취소합니다.
            event.preventDefault();
        };
    
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);
    
    return (<>
        <Container row="true">
            <BaseVideo ref={videoRef} 
                onTimeUpdate={handleProgress}
                onClick={handlePlayPause}
                src={srcUrl}
            />
            <Volume videoRef={videoRef} />
        </Container>
        <Container row="true">
            <Button onClick={handlePlayPause}>
                {(!videoRef.current || videoRef.current.paused) ? <FaPause /> : <FaPlay />}
            </Button>
            <ProgressBar videoRef={videoRef} value={time} />
        </Container>
    </>);
};
