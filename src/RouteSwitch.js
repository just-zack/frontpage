import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

const RouteSwitch = ({ activeUser, setActiveUser }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile activeUser={activeUser} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
