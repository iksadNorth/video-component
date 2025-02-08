import React, { useState, useEffect } from "react";
import { Container } from "../Container";
import { Button } from "../Button";
import { Video } from "../Video";
import { lightTheme, darkTheme } from "../Theme/Type";
import { useTheme } from '../Theme';

import { CommentList } from './CommentList';
import { MetaData } from './MetaData';
import { VideoProvider } from "../Video/VideoContext ";
import { backURL } from "../../utils";
import api from "../../axio";
import { useProxy } from "../AxioProxy";
import { useParams } from "react-router-dom";


const Watch = () => {
    const { videoId } = useParams();
    const { setTheme } = useTheme();
    const [data, setData] = useState([]);
    const proxy = useProxy();

    const fetchData = (videoId) => async () => {
        if(!videoId) return {};

        const [metadata, comments] = await Promise.all([
            api(`/api/v1/videos/${videoId}/metadatas`).then(res => res.data),
            api(`/api/v1/videos/${videoId}/comments?page_size=10&page=1&sort=-created_at`).then(res => res.data),
        ]);
        
        return {
            ...metadata, ...comments,
            videoId: videoId,
        };
    };

    useEffect(() => {
        proxy(fetchData(videoId)).then(setData);
    }, []);

    return (<>
        <Container style={{ 'minHeight': '100vh' }}>
            <Container style={{ 'width': '1000px' }}>
                <VideoProvider>
                    <Video srcUrl={backURL(`/api/v1/videos/${videoId}`)}></Video>
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
