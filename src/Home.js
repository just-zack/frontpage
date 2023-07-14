import PrimarySearchAppBar from "./components/Nav_mui";
import PostCard from "./components/Post_Card";
import NewPostCard from "./components/New_Post";
import Login from "./components/Login";
import NewPostModal from "./components/NewPost_Modal";

import React, { useState } from "react";

export default function Home({ activeUser, setActiveUser }) {
  const [newPost, setNewPost] = useState(false);
  return (
    <div className="Home">
      <PrimarySearchAppBar
        activeUser={activeUser}
        setActiveUser={setActiveUser}
      />
      <NewPostCard activeUser={activeUser} setNewPost={setNewPost} />
      <PostCard />
      <PostCard />
      <Login activeUser={activeUser} />
      <NewPostModal newPost={newPost} setNewPost={setNewPost} />
    </div>
  );
}
