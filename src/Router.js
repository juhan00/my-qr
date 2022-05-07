import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "@routes/Main";
import Edit from "@routes/Edit";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Edit />} />
    </Routes>
  );
};

export default Router;
