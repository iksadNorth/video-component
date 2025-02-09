import React from "react";
import { Bedge } from '../Bedge';
import { addBookMark } from "./Bookmark";
import { timeAgo } from "../../utils";
import { withCardAlign } from "../layout/Align";


const CommentTitle = withCardAlign();

export const Comment = ({comment, src, nickname, created_at, ...props}) => {
    // 댓글 파싱.
    // 기본적으로 라인 마다 줄바꿈 추가.
    const parseComment = (text) => {
        if(!text) return [];

        let lines = text.split('\n')
            .map((line) => line.trim())
            .filter((line) => line)
            .map((line) => addBookMark(line))   // 시간 댓글에 북마크 표기.
            .map((line, idx) => <span key={idx}>{line}<br/></span>);
        return lines;
    };

    return (<>
        <Bedge bdalign={'unset'} bdheight={'3rem'} src={src || null}>
            <CommentTitle>
                <span style={{ color: 'gray' }}>@{ nickname }</span>
                <span>{ timeAgo(created_at) }</span>
                <span className={"col-span-2"}>{ parseComment(comment) }</span>
            </CommentTitle>
        </Bedge>
    </>)};
