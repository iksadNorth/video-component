import React, { useRef, useState, useEffect } from 'react';
import { InputRange } from './InputRange';


export const Volume = ({ value, videoRef, row, ...props }) => {  
    // getter, setter 정의
    const setVideoVolume = (videoRef, volumeVal) => {
        // 유효성 검사
        const videoEl = videoRef.current;
        if(!videoEl) return;
        if(isNaN(volumeVal)) return;

        // 최대 최소값 설정
        volumeVal = Math.min(1, volumeVal);
        volumeVal = Math.max(0  , volumeVal);
    
        // 볼륨 및 State 반영
        videoEl.volume = volumeVal;
        setVolume(videoEl.volume);
    };

    // State 정의
    const [volume, setVolume] = useState(0);
    const volumeRef = useRef(null);
    
    // 이벤트 정의
    const handleVolumeChange = () => {
        const volumeEle = volumeRef.current;
        if(!volumeEle) return;
        setVideoVolume(videoRef, volumeEle.value);
    };
    
    // Volume 초기화
    useEffect(() => {
        setVideoVolume(videoRef, 1);
    }, [videoRef]);

    // 외부 요청값 반영
    useEffect(() => {
        setVideoVolume(videoRef, value);
    }, [value]);

    return (
        <InputRange 
            ref={volumeRef} row={row}
            value={volume} onChange={handleVolumeChange}
            {...props}
        >{Math.round(volume * 100)}</InputRange>
    );
};
