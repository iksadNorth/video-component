import React from "react";
import { Container } from "../Container";
import { Button } from "../Button";
import { Video } from "../Video";
import { lightTheme, darkTheme } from "../Theme/Type";
import { useTheme } from '../Theme';
import { Spacer } from '../Spacer';

import { CommentList } from './CommentList';
import { MetaData } from './MetaData';
import { VideoProvider } from "../Video/VideoContext ";
import { backURL } from "../../utils";


const Watch = () => {
    const { setTheme } = useTheme();
    
    const data = {
        videoId: '0001',

        title: 'ROSÉ & Bruno Mars - APT. (Official Music Video)',
        publisher: 'ROSÉ',
        numDescripter: 15800000,
        numLikes: 13450000,

        totalCount: 635733,
        commentArr: [
            {
                comment: `
                    @ChillVibesStation97 3개월 전
                    0:00    LANY - Anything 4 u 
                    0:0:12  LANY - Anything 4 u 
                    02:14   LANY - you!
                    2:14    LANY - you!
                `,
                src: 'https://yt3.ggpht.com/2HOGEbS4V-u8tiQ6k6RmEbMa2oZJuigscOP1WomUbE6zJ1DvGWXCYS1z2koZUKJDURdVs_CwDw=s88-c-k-c0x00ffffff-no-rj',
            },
            {
                comment: `
                    @ChillVibesStation97 3개월 전
                    진찌 행복 별거없네요 깨끗하게 씻고 창문열어놓고 포근한 이블속에서 좋아는 향수 뿌려주고 이어폰끼고 들으니까 넘 행복한거같아요 진찌루
                    이거 읽으시는 분들도 오늘보다 더행복한 내일이었으면 좋겠어요!
                `,
                src: 'https://yt3.ggpht.com/Gs5RZTP9_2qb-2ItAy2ZZrKfSGAKoAUCNJjiG_sNkrdpvxrXKRni_8BMDxvgKdlf2FwdhyE=s88-c-k-c0x00ffffff-no-rj',
            },
            {
                comment: `
                    @ummmmmmum 4개월 전
                    아니 제가 좋아하는 가수 다 모아놓으면 당연히 좋을 수 밖에... 레이니, 콜플, 라우브 노래 진짜 좋아요 ㅠㅠ
                `,
                src: 'https://yt3.ggpht.com/ytc/AIdro_lPZ02ITT9XKLBu5yfEZsM6uHNJ9VleTrmdVacaB69VPnM=s88-c-k-c0x00ffffff-no-rj',
            },
        ],
    };

    return (<>
        <Container style={{ 'minHeight': '100vh' }}>
            <Spacer/>
            <Container style={{ 'width': '700px' }}>
                <VideoProvider>
                    <Video srcUrl={backURL(`/api/v1/video/${data?.videoId}`)}></Video>
                    <MetaData {...data} />
                    <CommentList {...data} />
                </VideoProvider>
                <Container row="true">
                    <Button onClick={() => setTheme(lightTheme)}>Light</Button>
                    <Button onClick={() => setTheme(darkTheme)}>Dark</Button>
                </Container>
            </Container>
        </Container>
    </>)};

export default Watch;
