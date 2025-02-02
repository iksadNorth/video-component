import { createContext, useContext, useRef } from "react";

// Context 생성
const VideoContext = createContext(null);

// Provider 생성
export const VideoProvider = ({ children }) => {
    const videoRef = useRef(null);

    return (
        <VideoContext.Provider value={videoRef}>
            {children}
        </VideoContext.Provider>
    );
};

// Context 가져오는 훅
export const useVideo = () => {
    return useContext(VideoContext);
};
