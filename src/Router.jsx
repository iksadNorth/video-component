import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home     from "./components/Home";
import Watch    from "./components/Watch";
import Test     from "./components/Test";
import AuthGoogleCallback from "./components/AuthGoogleCallback";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="watch/:videoId" element={<Watch />} />
        <Route path="test" element={<Test />} />
        <Route path="auth/google/callback" element={<AuthGoogleCallback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;