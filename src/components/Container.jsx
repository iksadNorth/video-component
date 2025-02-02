import React from 'react';
import styled from 'styled-components';
import { useTheme } from './Theme';


const Base = styled.div`
    color: ${({theme}) => theme.color};

    display: flex;
    flex-direction: ${({row}) => row ? 'row' : 'column'};
    align-items: center;

    height: 100%;
    width: 100%;

    gap: 5px;
`;

export const Container = (props) => {
    const { theme } = useTheme();
    return (
        <Base theme={theme} {...props}>
            { props.children }
        </Base>
    );
};
