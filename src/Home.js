import PrimarySearchAppBar from "./components/Nav_mui";
import PostCard from "./components/Post_Card";
import NewPostCard from "./components/New_Post";
import Login from "./components/Login";

import React from "react";

export default function Home({ activeUser, setActiveUser }) {
  return (
    <div className="Home">
      <PrimarySearchAppBar
        activeUser={activeUser}
        setActiveUser={setActiveUser}
      />
      <NewPostCard activeUser={activeUser} />
      <PostCard />
      <PostCard />
      <Login activeUser={activeUser} />
    </div>
  );
}
