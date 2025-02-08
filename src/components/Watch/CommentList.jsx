import React from "react";
import { Container } from "../Container";
import { IconBtn } from '../IconBtn';
import { faSort } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import { withFitSize } from "../layout/Size";

import { Comment } from './Comment';
import { convertToKoreanUnit } from "../../utils";
import { withCardAlign } from "../layout/Align";


const CommentListTitle = withCardAlign();
const IconBtnStyled = withFitSize(IconBtn);

export const CommentList = ({totalCount, items, ...props}) => {
    return (<>
        <div>
            <CommentListTitle>
                <h3>댓글 {convertToKoreanUnit(totalCount)}개</h3>
                <IconBtnStyled icon={faSort} bgcolor={'unset'}>
                    정렬 기준
                </IconBtnStyled>
            </CommentListTitle>
            <Container>
                { 
                    items?.map(
                        (props, key) => <Comment key={key} {...props}/>
                    ) 
                }
            </Container>
        </div>
    </>)};
