import React from "react";
import styled from 'styled-components';
import { FRONT_URL, openPopup } from "../../utils";


const GoogleButton = styled.button`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    background-color: white;
    color: #5f6368;
    border: 1px solid #dadce0;

    padding: 10px 16px;
    border-radius: 4px;

    font-size: 14px;
    font-weight: 500;

    cursor: pointer;
    transition: background 0.5s, box-shadow 0.5s;
    
    &:hover {
        background: #f8f9fa;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    &:active {
        background: #f1f3f4;
    }
`;

const GoogleIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const GoogleLoginButton = () => {
    const CLIENT_ID = "166933239001-7hecbc575m8g9n3l9lt7idjb2570brov.apps.googleusercontent.com";
    const REDIRECT_URI = `${FRONT_URL}/auth/google/callback`;

    const googleLogin = () => {
        const authUrl = `https://accounts.google.com/o/oauth2/auth`;
        const params = {
            client_id: CLIENT_ID,
            redirect_uri: REDIRECT_URI,
            response_type: `code`,
            scope: `email profile`,
        };
        openPopup(authUrl, params);
    };
  return (
    <GoogleButton onClick={googleLogin}>
        <GoogleIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="Google" />
        Sign in with Google
    </GoogleButton>
  );
};
