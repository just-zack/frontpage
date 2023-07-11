import PrimarySearchAppBar from "./components/Nav_mui";
import PostCard from "./components/Post_Card";
import NewPostCard from "./components/New_Post";
import Login from "./components/Login";
import "./App.css";

import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <NewPostCard />
      <PostCard />
      <PostCard />
      <Login />
    </div>
  );
}

export default App;
