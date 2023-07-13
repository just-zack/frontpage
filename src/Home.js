import PrimarySearchAppBar from "./components/Nav_mui";
import PostCard from "./components/Post_Card";
import NewPostCard from "./components/New_Post";
import Login from "./components/Login";

import React from "react";

export default function Home({ activeUser }) {
  return (
    <div className="Home">
      <PrimarySearchAppBar />
      <NewPostCard activeUser={activeUser} />
      <PostCard />
      <PostCard />
      <Login activeUser={activeUser} />
    </div>
  );
}
