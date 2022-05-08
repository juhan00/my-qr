import React from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "@routes/Intro";
import Main from "@routes/Main";
import Edit from "@routes/Edit";
import Order from "@routes/Order";
import Login from "@routes/Login";
import Join from "@routes/Join";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/main" element={<Main />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  );
};

export default Router;
