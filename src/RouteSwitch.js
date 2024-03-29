import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

const RouteSwitch = ({ activeUser, setActiveUser, profile, setProfile }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              activeUser={activeUser}
              setActiveUser={setActiveUser}
              profile={profile}
              setProfile={setProfile}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              activeUser={activeUser}
              setActiveUser={setActiveUser}
              profile={profile}
              setProfile={setProfile}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
