import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useProxy } from "./AxioProxy";
import api from "../axio";
import useLocalStorage from "./Hook/useLocalStorage";


const AuthGoogleCallback = () => {
    const [searchParams] = useSearchParams();
    const proxy = useProxy();
    const [accessToken, setAccessToken, removeAccessToken] = useLocalStorage('access_token', null);
    const [userInfo, setUserInfo, removeUserInfo] = useLocalStorage('user_info', null);

    const fetchToken = (code) => async () => {
        const res = await api.post(
            "/api/v1/auth/google/callback", { code }
        );
        return res.data;
    };

    useEffect(() => {
        const code = searchParams.get("code");
        if (!code) return;
        
        proxy(fetchToken(code)).then((res) => {
            if(!res.access_token) return;
            setAccessToken(res.access_token);
            setUserInfo(res.user);
        }).finally(() => { window.close();});

    }, []);
  return (<></>);
};

export default AuthGoogleCallback;
