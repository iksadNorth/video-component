import React, { useRef, useState, useEffect } from 'react';
import { Container } from '../Container';


export const Volume = ({ videoRef }) => {    
    const [volume, setVolume] = useState(0);
    const volumeRef = useRef(null);

    const setVideoVolume = (videoRef, volumeVal) => {
        // 유효성 검사
        const videoEle = videoRef.current;
        if(!videoEle) return;
        if(isNaN(volumeVal)) return;

        // 최대 최소값 설정
        volumeVal = Math.min(1, volumeVal);
        volumeVal = Math.max(0  , volumeVal);
    
        // 볼륨 및 State 반영
        videoEle.volume = volumeVal;
        setVolume(videoEle.volume);
    };

    // Input 값에 따른 Volume 변경
    const handleVolumeChange = () => {
        const volumeEle = volumeRef.current;
        if(!volumeEle) return;
        setVideoVolume(videoRef, volumeEle.value);
    };
    
    // Volume 초기화
    useEffect(() => {
        setVideoVolume(videoRef, 1);
    }, []);

    return (
        <Container>
            <span>{Math.round(volume * 100)}</span>
            <input 
                ref={volumeRef}
                value={volume} onChange={handleVolumeChange}
                type='range' max='1' step='0.01'
                style={{'writingMode': 'sideways-lr'}}
            />
        </Container>
    );
};
