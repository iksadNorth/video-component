import React, { useContext } from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { Video } from "./Video";
import { lightTheme, darkTheme } from "./Theme/Type";
import { ThemeContext } from './Theme';


const About = () => {
    const { setTheme } = useContext(ThemeContext);
    return (
        <Container style={{ 'minHeight': '100vh' }}>
            <h2>About Page</h2>
            <Container style={{ 'width': '700px' }}>
                <Video srcUrl={'http://localhost:8000/api/v1/video/0001'}></Video>
            </Container>
            <Container row="true">
                <Button onClick={() => setTheme(lightTheme)}>Light</Button>
                <Button onClick={() => setTheme(darkTheme)}>Dark</Button>
            </Container>
        </Container>
    )};

export default About;
