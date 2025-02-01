import React, { useContext } from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { Video } from "./Video";
import { lightTheme, darkTheme } from "./Theme/Type";
import { ThemeContext } from './Theme';
import { Spacer } from './Spacer';
import { Bedge } from './Bedge';
import { IconBtn, IconContainer } from './IconBtn';
import { faThumbsUp, faThumbsDown, faShare, faDownload, faScissors, faBookmark } from "@fortawesome/free-solid-svg-icons";


const Watch = () => {
    const { setTheme } = useContext(ThemeContext);
    return (<>
        <Container style={{ 'minHeight': '100vh' }}>
            <Spacer/>
            <Container style={{ 'width': '700px' }}>
                <div>
                    <Video srcUrl={'http://localhost:8000/api/v1/video/0001'}></Video>
                    <h2>ROSÉ & Bruno Mars - APT. (Official Music Video)</h2>
                    <Container row="true">
                        <Bedge src="https://yt3.ggpht.com/qjsflFmyakGs5ekX8fPsDNfuKABx-yxIDrv-4ooPAFcZ6JUUpUPlue7g_d-VAk2YAiYR-0yr=s48-c-k-c0x00ffffff-no-rj">
                            <a href="#">ROSÉ</a><br/>
                            <span>구독자 1580만명</span>
                        </Bedge>
                        <IconContainer row="true">
                            <IconBtn icon={faThumbsUp}>
                                1345만
                            </IconBtn>
                            <IconBtn icon={faThumbsDown}>
                                &nbsp;
                            </IconBtn>
                            <IconBtn icon={faShare}>
                                공유
                            </IconBtn>
                            <IconBtn icon={faDownload}>
                                오프라인 저장
                            </IconBtn>
                            <IconBtn icon={faScissors}>
                                클립
                            </IconBtn>
                            <IconBtn icon={faBookmark}>
                                저장
                            </IconBtn>
                            <IconBtn>
                                ...
                            </IconBtn>
                        </IconContainer>
                    </Container>
                </div>
                <Container row="true">
                    <Button onClick={() => setTheme(lightTheme)}>Light</Button>
                    <Button onClick={() => setTheme(darkTheme)}>Dark</Button>
                </Container>
            </Container>
        </Container>
    </>)};

export default Watch;
