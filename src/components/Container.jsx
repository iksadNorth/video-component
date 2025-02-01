import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from './Theme';


const Base = styled.div`
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.color};

    display: flex;
    flex-direction: ${({row}) => row ? 'row' : 'column'};
    justify-content: center;
    align-items: center;

    gap: 5px;
`;

export const Container = (props) => {
    const { theme } = useContext(ThemeContext);
    return (
        <Base theme={theme} {...props}>
            { props.children }
        </Base>
    );
};
