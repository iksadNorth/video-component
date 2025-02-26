import React from 'react';
import styled from 'styled-components';
import { useTheme } from './Theme';


const Base = styled.button`
  padding: 10px;
  background-color: ${({theme}) => theme.btn_color};
  color: ${({theme}) => theme.color};
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;

export const Button = (props) => {
    const { theme } = useTheme();
    return (
        <Base theme={theme} {...props}>
          {props.children}
        </Base>
    );
};
