import React from "react";
import styled from 'styled-components';
import { UserLogginBedge } from "../UserLogginBedge";
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
                <UserLogginBedge />
            </div>
        </Card>
    </>);
};