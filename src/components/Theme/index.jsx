import React, { createContext, useState, useContext } from 'react';
import { lightTheme, darkTheme } from './Type';

// ThemeContext 생성
const ThemeContext = createContext();

// 테마 상태를 관리하는 컴포넌트
// Provider를 이용해 theme 파라미터 자동 전달.
const ThemeProviderContext = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
  );
};

// Context 가져오는 훅
const useTheme = () => {
    return useContext(ThemeContext);
};


// export문
export default ThemeProviderContext;
export { useTheme, lightTheme, darkTheme };
