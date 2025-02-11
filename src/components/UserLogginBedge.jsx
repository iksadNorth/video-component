import { Bedge } from './Bedge';
import useLocalStorage from "./Hook/useLocalStorage";

export const UserLogginBedge = ({onClick, ...props}) => {
    const [accessToken, setAccessToken, removeAccessToken] = useLocalStorage('access_token', null);
    const [userInfo, setUserInfo, removeUserInfo] = useLocalStorage('user_info', null);
    
    return accessToken ? (
        <Bedge style={{ width: 'unset' }} src={userInfo.bedge_src ?? null} onClick={ onClick }>
            { userInfo.nickname ?? '' }
        </Bedge>
    ) : (
        <Bedge style={{ width: 'unset' }} src={null} onClick={ onClick }>
            비로그인
        </Bedge>
    )
};
