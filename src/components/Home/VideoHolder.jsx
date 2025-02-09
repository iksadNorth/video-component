import { useNavigate }  from "react-router-dom";
import styled from "styled-components";
import { withFullSize } from "../layout/Size";
import { Bedge } from "../Bedge";
import { convertToKoreanUnit, timeAgo } from "../../utils";


const Preview = styled.img`
    width: 100%;
    height: 60%;
    object-fit: cover;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;

    & > * {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
    }
`;

const VideoHolderStyled = styled(withFullSize())`
    border: solid 1px black;
    padding: 0;
    aspect-ratio: calc(5/4);

    overflow: hidden;
    border-radius: 10px;

    cursor: pointer;
`;

export const VideoHolder = ({ thumbnail, title, publisher, numViews, created_at, videoId, ...props }) => {
    const navigate = useNavigate();

    return (<>
        <VideoHolderStyled onClick={() => navigate(`/watch/${videoId}`)}>
            <Preview src={ thumbnail } />
            <Bedge bdalign="start">
                <Content>
                    <span>{ title }</span>
                    <span style={{color: 'gray'}}>{ publisher }</span>
                    <span style={{color: 'gray'}}>조회수 { convertToKoreanUnit(numViews) }회 { timeAgo(created_at) }</span>
                </Content>
            </Bedge>
        </VideoHolderStyled>
    </>);
};