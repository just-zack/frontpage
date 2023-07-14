import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

const RouteSwitch = ({ activeUser, setActiveUser }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home activeUser={activeUser} setActiveUser={setActiveUser} />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile activeUser={activeUser} setActiveUser={setActiveUser} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
