import React from "react";
import styled from 'styled-components';
import { useTheme } from './components/Theme';
import { ToastProvider } from "./components/AxioProxy/Toast";
import { LoadingProvider } from "./components/AxioProxy/Loading";
import { AxiosProvider } from "./components/AxioProxy";


const ThemeProxy = styled.div`
  background-color: ${({theme}) => theme.background};
`;

const Proxy = (props) => {
  const { theme } = useTheme();
  return (
    <LoadingProvider>
      <ToastProvider>
        <AxiosProvider>
          <ThemeProxy theme={theme}>
            {props.children}
          </ThemeProxy>
        </AxiosProvider>
      </ToastProvider>
    </LoadingProvider>
  );
};

export default Proxy;
