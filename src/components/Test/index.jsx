import React from "react";
import { Container } from "../Container";
import { SizeTest, SizeTestPair } from './SizeTest';
import { Bedge } from '../Bedge';
import { Video } from '../Video';
import { backURL } from "../../utils";

const Test = () => (
    <Container>
        <h2>Test Page</h2>
        <SizeTestPair max={'300px'}>
            <Bedge src="https://yt3.ggpht.com/qjsflFmyakGs5ekX8fPsDNfuKABx-yxIDrv-4ooPAFcZ6JUUpUPlue7g_d-VAk2YAiYR-0yr=s48-c-k-c0x00ffffff-no-rj">
                <a href="#">ROSÉ</a><br/>
                <span>구독자 1580만명</span>
            </Bedge>
        </SizeTestPair>
        <SizeTestPair max={'300px'}>
            <Video srcUrl={backURL('/api/v1/video/0001')}></Video>
        </SizeTestPair>
    </Container>
);

export default Test;
