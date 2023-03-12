import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default Router;
