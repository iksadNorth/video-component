import { faThumbsUp, faThumbsDown, faShare, faDownload, faScissors, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { IconBtn, IconContainer } from '../IconBtn';
import { convertToKoreanUnit } from "../../utils";


export const Tools = ({numLikes, numDislikes, ...props}) => {
    return (
        <IconContainer row="true">
            <IconBtn icon={faThumbsUp}>
                { convertToKoreanUnit(numLikes) }
            </IconBtn>
            <IconBtn icon={faThumbsDown}>
                { convertToKoreanUnit(numLikes) }
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
    );
};
