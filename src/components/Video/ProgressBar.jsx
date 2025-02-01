import React, { useState, useEffect } from 'react';
import { InputRange } from './InputRange';


export const ProgressBar = ({ value, videoRef, ...props }) => {
    // getter, setter 정의
    const getTimeFromBar = (scale) => {
        const videoEl = videoRef.current;
        if(!videoEl) return 0;
        return scale * (videoEl.duration);
    };
    const getScaleFromBar = (seconds) => {
        const videoEl = videoRef.current;
        if(!videoEl) return 0;
        return (seconds / videoEl.duration);
    };
    const getTimeFormatted = (seconds) => {
        if(!seconds) return '00:00:00';

        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
    
        return [hrs, mins, secs]
            .map((unit) => String(unit).padStart(2, "0"))
            .join(":");
    };
    const setVideoCurrentTime = (videoRef, timeVal) => {
        // 유효성 검사
        if(!videoRef) return;
        const videoEl = videoRef.current;
        if(!videoEl) return;
        if(isNaN(videoEl.duration)) return;
        if(isNaN(timeVal)) return;

        // 최대 최소값 설정
        timeVal = Math.min(videoEl.duration, timeVal);
        timeVal = Math.max(0                , timeVal);
    
        // 볼륨 및 State 반영
        videoEl.currentTime = timeVal;
        setProgress(getScaleFromBar(timeVal));
    };

    // State 정의
    const [progress, setProgress] = useState(0);
    const [transaction, setTransaction] = useState(false);
    const [currentTime, setCurrentTime] = useState(videoRef.current?.currentTime ?? 0);

    // 이벤트 정의
    const mouseDown = () => {
        setTransaction(true);
    };
    const mouseUp = () => {
        const currentTime = getTimeFromBar(progress);
        setVideoCurrentTime(videoRef, currentTime);
        videoRef.current.play();

        setTransaction(false);
    };

    // 재생 위치에 따른 진척도 반영.
    useEffect(() => {
        const videoEl = videoRef.current;
        if (!videoEl) return;
    
        const timeupdate = () => {
            setCurrentTime(videoEl.currentTime);
        };
    
        videoEl.addEventListener("timeupdate", timeupdate);
        return () => videoEl.removeEventListener("timeupdate", timeupdate);
    }, [videoRef]);
    useEffect(() => {
        if(transaction) return;
        setProgress(getScaleFromBar(currentTime));
    }, [currentTime]);

    // 외부 요청값 반영
    useEffect(() => {
        if(transaction) return;
        setProgress(getScaleFromBar(value));
    }, [value]);
  
    return (<>
        <InputRange
            value={progress} onChange={(event) => setProgress(event.target.value)} 
            onMouseUp={mouseUp} onMouseDown={mouseDown}
            row="true" {...props}
            >
            {getTimeFormatted(getTimeFromBar(progress))}
        </InputRange>
    </>);
};
