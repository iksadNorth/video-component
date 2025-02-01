import React, { createContext, useState } from 'react';
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

// export문
export default ThemeProviderContext;
export { ThemeContext, lightTheme, darkTheme };
