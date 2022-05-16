import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "containers/HomePage";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
