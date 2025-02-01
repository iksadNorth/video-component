import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Watch from "./components/Watch";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="watch" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;