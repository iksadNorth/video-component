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

const Frame = styled.div`
    width: 100%;
    position: relative;
`;

const Cover = styled(Container)`
    position: absolute;
    top: 50%; left: 50%;
    height: 90%; width: 95%;
    transform: translate(-50%, -50%);
    pointer-events: none;

    & .clickable {
        pointer-events: auto;
    }

    & .x-fit {
        width: fit-content;
    }

    & .y-fit {
        height: fit-content;
    }
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
    
    return (<Frame>
        <BaseVideo 
            ref={videoRef} src={srcUrl}
            onClick={() => setIsPlaying((prev) => !prev)}
        />
        <Cover>
            <Container row="true">
                <Container>&nbsp;</Container>
                <Volume className='x-fit clickable' videoRef={videoRef} value={volume} />
            </Container>
            <Container className='y-fit clickable' row="true">
                <PlayBtn videoRef={videoRef} value={isPlaying}/>
                <ProgressBar videoRef={videoRef} value={currentTime}/>
            </Container>
        </Cover>
    </Frame>);
};
