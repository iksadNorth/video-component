import styled from 'styled-components';
import { IconBtn } from '../IconBtn';
import { withFullSize } from '../layout/Size';
import { faHome, faBoltLightning, faBoxTissue, faClock, faPlayCircle, faVideo, faMobile, faLadderWater, faThumbsUp, faScissors } from "@fortawesome/free-solid-svg-icons";
import { Line } from '../layout/Line';
import { Container } from '../Container';
import { Bedge } from '../Bedge';



const IconBtnAlign = withFullSize(IconBtn);
const IconBtnFull = styled(IconBtnAlign)`
    text-align: start;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`;
export const SideBarStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const SideBar = ({ ...props }) => {
    return (
        <SideBarStyled {...props}>
            <IconBtnFull icon={faHome}>
                홈
            </IconBtnFull>
            <IconBtnFull icon={faBoltLightning}>
                Shorts
            </IconBtnFull>
            <IconBtnFull icon={faBoxTissue}>
                구독
            </IconBtnFull>

            <Line row/>

            <Container>
                내 페이지
            </Container>
            <IconBtnFull icon={faClock}>
                시청기록
            </IconBtnFull>
            <IconBtnFull icon={faPlayCircle}>
                재생목록
            </IconBtnFull>
            <IconBtnFull icon={faVideo}>
                내 동영상
            </IconBtnFull>
            <IconBtnFull icon={faMobile}>
                내 영화
            </IconBtnFull>
            <IconBtnFull icon={faLadderWater}>
                나중에 볼 동영상
            </IconBtnFull>
            <IconBtnFull icon={faThumbsUp}>
                좋아요 동영상
            </IconBtnFull>
            <IconBtnFull icon={faScissors}>
                내 클립
            </IconBtnFull>

            <Line row/>

            <Container>
                구독
            </Container>
            <Bedge>
                ROSE
            </Bedge>
            <Bedge>
                ROSE
            </Bedge>
            <Bedge>
                ROSE
            </Bedge>
        </SideBarStyled>
    );
};