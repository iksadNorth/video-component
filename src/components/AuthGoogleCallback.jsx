import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useProxy } from "./AxioProxy";
import { setItem } from "../utils/storage";
import api from "../axio";


const AuthGoogleCallback = () => {
    const [searchParams] = useSearchParams();
    const proxy = useProxy();

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
            setItem("access_token", res.access_token);
            
            // 창닫기
            window.close();
        });

    }, []);
  return (<></>);
};

export default AuthGoogleCallback;
