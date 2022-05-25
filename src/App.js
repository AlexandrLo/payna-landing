import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import NavBar from "./components/NavBar";
import NotFound from "pages/NotFound";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
