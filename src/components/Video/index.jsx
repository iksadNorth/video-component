import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { Container } from '../Container';
import { Volume } from './Volume';
import { ProgressBar } from './ProgressBar';
import { PlayBtn } from './PlayBtn';


const BaseVideo = styled.video`
    width: 100%;
    border-radius: 20px;
`;

export const Video = ({ srcUrl }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.defaultPrevented) {
                return; // 이미 이벤트가 실행되는 중이라면 아무 동작도 하지 않습니다.
            }
            
            const video = videoRef.current;
            if (!video) return;
            
            switch (event.key) {
                case "ArrowRight":
                    setCurrentTime((prev) => (prev + 5));
                    break;

                case "ArrowLeft":
                    setCurrentTime((prev) => (prev - 5));
                    break;
                
                case "ArrowUp":
                    setVolume((prev) => (prev + 0.05));
                    break;

                case "ArrowDown":
                    setVolume((prev) => (prev - 0.05));
                    break;
                    
                case " ":
                case "Enter":
                    setIsPlaying((prev) => !prev);
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
        <Container row="true" style={{'aspectRatio': 5/3}}>
            <BaseVideo 
                ref={videoRef} src={srcUrl}
                onClick={() => setIsPlaying((prev) => !prev)}
            />
            <Volume videoRef={videoRef} value={volume} />
        </Container>
        <Container row="true">
            <PlayBtn videoRef={videoRef} value={isPlaying}/>
            <ProgressBar videoRef={videoRef} value={currentTime} style={{'justifyContent': 'unset'}}/>
        </Container>
    </>);
};
