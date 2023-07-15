import PrimarySearchAppBar from "./components/Nav_mui";
import PostCard from "./components/Post_Card";
import NewPostCard from "./components/New_Post";
import Login from "./components/Login";
import NewPostModal from "./components/NewPost_Modal";
import UpdateProfile from "./components/Profile_creation";

import React, { useState } from "react";

export default function Home({
  activeUser,
  setActiveUser,
  profile,
  setProfile,
}) {
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
      <Login
        activeUser={activeUser}
        profile={profile}
        setProfile={setProfile}
      />
      <NewPostModal
        newPost={newPost}
        setNewPost={setNewPost}
        activeUser={activeUser}
      />
      <UpdateProfile profile={profile} setProfile={setProfile} />
    </div>
  );
}
