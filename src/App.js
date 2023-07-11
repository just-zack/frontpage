import RouteSwitch from "./RouteSwitch";
import getUser from "./components/User";
import "./App.css";

import React, { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  getUser();
  return (
    <div className="App">
      <RouteSwitch />
    </div>
  );
}

export default App;
