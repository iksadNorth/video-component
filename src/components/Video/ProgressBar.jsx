import React, { useRef, useState, useEffect } from 'react';
import { Container } from '../Container';


export const ProgressBar = ({ value, videoRef }) => {
    const getTimeFromBar = (scale) => {
        const video = videoRef.current;
        return (scale / 100) * video.duration;
    };
    const getScaleFromBar = (seconds) => {
        const video = videoRef.current;
        return (seconds / video.duration) * 100;
    };
    const getTimeFormatted = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
    
        return [hrs, mins, secs]
            .map((unit) => String(unit).padStart(2, "0"))
            .join(":");
    };

    const [progress, setProgress] = useState(0);
    const rangeRef = useRef(null);

    const setVideoTime = (videoRef, timeVal) => {
        // 유효성 검사
        const videoEle = videoRef.current;
        if(!videoEle) return;
        if(isNaN(timeVal)) return;

        // 최대 최소값 설정
        timeVal = Math.min(videoEle.duration, timeVal);
        timeVal = Math.max(0  , timeVal);
    
        // 볼륨 및 State 반영
        setProgress(getScaleFromBar(timeVal));
    };

    const handleProgressChange = () => {
        const rangeEle = rangeRef.current;
        if(!rangeEle) return;

        const currentTime = getTimeFromBar(rangeEle.value);
        setVideoTime(videoRef, currentTime);
        console.log('currentTime' + getScaleFromBar(currentTime));
        console.log('progress' + progress);
        videoRef.current.play();
    };
    
    // Volume 초기화
    useEffect(() => {
        setVideoTime(videoRef, 0);
    }, []);

    // time 설정 반영
    useEffect(() => {
        setProgress(getScaleFromBar(value));
    }, [value]);
  
    return (
        <Container row="true">
            <span>{getTimeFormatted(videoRef.current?.currentTime ?? 0)}</span>
            <input
                ref={rangeRef}
                value={progress} onChange={handleProgressChange}
                type="range" max="100" step="0.01"
            />
        </Container>
    );
};
