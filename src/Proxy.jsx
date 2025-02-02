import React from "react";
import styled from 'styled-components';
import { useTheme } from './components/Theme';


const ThemeProxy = styled.div`
  background-color: ${({theme}) => theme.background};
`;

const Proxy = (props) => {
  const { theme } = useTheme();
  return (
    <ThemeProxy theme={theme}>
      {props.children}
    </ThemeProxy>
  );
};

export default Proxy;
