import React, { useEffect } from "react";
import styled from 'styled-components';
import { Container } from "../Container";
import { Bedge } from '../Bedge';
import { Tools } from './Tools';
import { convertToKoreanUnit } from "../../utils";


const ContainerStyled = styled(Container)`
    align-items: flex-start;
`;

export const MetaData = ({title, publisher, numDescripter, ...props}) => {
    // 페이지 제목 변경
    useEffect(() => {
        const oldTitle = document.title;
        document.title = (title ?? oldTitle);

        return () => {
            document.title = oldTitle;
        };
    }, [title]);
    
    return (<ContainerStyled>
        <h2>{ title ?? document.title }</h2>
        <Container row="true">
            <Bedge src="https://yt3.ggpht.com/qjsflFmyakGs5ekX8fPsDNfuKABx-yxIDrv-4ooPAFcZ6JUUpUPlue7g_d-VAk2YAiYR-0yr=s48-c-k-c0x00ffffff-no-rj">
                <a href="#">{ publisher }</a><br/>
                <span>구독자 { convertToKoreanUnit(numDescripter) }명</span>
            </Bedge>
            <Tools {...props}/>
        </Container>
    </ContainerStyled>)};
