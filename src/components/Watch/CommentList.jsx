import React from "react";
import { Container } from "../Container";
import { Spacer } from '../Spacer';
import { IconBtn } from '../IconBtn';
import { faSort } from "@fortawesome/free-solid-svg-icons";

import { Comment } from './Comment';
import { convertToKoreanUnit } from "../../utils";


export const CommentList = ({totalCount, commentArr, ...props}) => {
    return (<>
        <Container>
            <Container row="true">
                <h3>댓글 {convertToKoreanUnit(totalCount)}개</h3>
                <Spacer row="true"/>
                <IconBtn icon={faSort} bgcolor={'unset'}>
                    정렬 기준
                </IconBtn>
            </Container>
            <Container>
                { 
                    commentArr?.map(
                        (props, key) => <Comment key={key} {...props}/>
                    ) 
                }
            </Container>
        </Container>
    </>)};
