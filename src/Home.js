import PrimarySearchAppBar from "./components/Nav_mui";
import PostCard from "./components/Post_Card";
import NewPostCard from "./components/New_Post";
import Login from "./components/Login";
import getUser from "./components/User";

import React from "react";

export default function Home() {
  return (
    <div className="Home">
      <PrimarySearchAppBar />
      <NewPostCard />
      <PostCard />
      <PostCard />
      <Login />
    </div>
  );
}
