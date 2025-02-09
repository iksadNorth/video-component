import React from "react";
import { VideoHolder } from "./VideoHolder";
import { ListContainer } from "../layout/ListContainer";


const Home = () => {
    const items = [
        {
            thumbnail: 'https://cdn.pixabay.com/photo/2023/07/17/09/25/tree-8132250_1280.jpg',
            title: '[쇼트트랙] 여자 계주 3000m 결승 하이라이트 | 2025 하얼빈 동계 아시안게임',
            publisher: 'SPOTV',
            numViews: 10000,
            created_at: '2025-02-01T10:10:00.000',
            videoId: '1',
        },
        {},
        {},
    ];
    return (
        <ListContainer>
            { items.map((item, index) => <VideoHolder key={index} { ...item }/>) }
        </ListContainer>
    )
};

export default Home;
