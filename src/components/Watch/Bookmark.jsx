import React from "react";
import styled from 'styled-components';

import { timeToSeconds, timeRegex } from '../../utils';
import { useVideo } from "../Video/VideoContext ";


const BookmarkStyled = styled.span`
    cursor: pointer;
    color: blue;
`;

export const Bookmark = ({ timestamp, children }) => {
    const videoRef = useVideo();

    const onClick = (timestamp) => (event) => {
        const seconds = timeToSeconds(timestamp);

        if(videoRef && videoRef.current) {
            // 영상 시점 변경.
            videoRef.current.currentTime = seconds;
            videoRef.current.play();
        }
    };

    return (
        <BookmarkStyled onClick={onClick(timestamp)}>
            { children }
        </BookmarkStyled>
    )
};

// 시간 형식이면 북마크 추가.
// Ex) 02:14     LANY - you! => <Bookmark timestamp={"02:14"}>02:14</Bookmark>     LANY - you!
export const addBookMark = (line) => {
    if(!line) return '';

    const delimiter = ' ';
    return line.split(delimiter).map((word, key) => {
        if (timeRegex.test(word)) {
            return <Bookmark 
                key={key} timestamp={word}
            >{word}</Bookmark>;
        } else if(word === '') {
            return <>&nbsp;</>;
        } else {
            return word;
        }
    }).reduce((acc, add) => <>{acc}{delimiter}{add}</>);
};
