import React from "react";
import styled from 'styled-components';
import { Bedge } from "../Bedge";
import { GoogleLoginButton } from "./GoogleLoginButton";


const Card = styled.div`
    height: 500px;
    width: 300px;

    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const UserDashBoard = ({ ...props }) => {
    return (<>
        <Card>
            <div>
                <GoogleLoginButton />
            </div>
            <div>
                <Bedge />
            </div>
            <div>
                <Bedge />
            </div>
            <div>
                <Bedge />
            </div>
        </Card>
    </>);
};