import RouteSwitch from "./RouteSwitch";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./config/firebase";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import guestIMG from "./img/guest.png";

import React, { useState, useEffect } from "react";

function App() {
  const dummyUser = {
    photoURL: "hello",
    displayName: "Guest User",
    email: "guest@email.com",
  };
  const [activeUser, setActiveUser] = useState({
    photoURL: guestIMG,
    displayName: "Guest User",
    email: "guest@email.com",
  });

  function GetUser() {
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          setActiveUser(user);
        } else {
          // User is signed out
          // ...

          alert("Need to login");
        }
      });
    }, []);
  }

  GetUser();
  return (
    <div className="App">
      <RouteSwitch activeUser={activeUser} setActiveUser={setActiveUser} />
    </div>
  );
}

export default App;
