import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "@routes/Main";
import Edit from "@routes/Edit";
import Order from "@routes/Order";
import Login from "@routes/Login";
import Join from "@routes/Join";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default Router;
