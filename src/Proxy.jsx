import React, { useContext } from "react";
import styled from 'styled-components';
import { ThemeContext } from './components/Theme';


const ThemeProxy = styled.div`
  background-color: ${({theme}) => theme.background};
`;

const Proxy = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProxy theme={theme}>
      {props.children}
    </ThemeProxy>
  );
};

export default Proxy;
