import PrimarySearchAppBar from "./components/Nav_mui";
import Sort from "./components/Sort_Nav";
import PostCard from "./components/Post_Card";
import UpdateProfile from "./components/Profile_creation";

import Login from "./components/Login";
import logout from "./components/logout";
import guest from "./img/guest.png";

import {
  Card,
  Typography,
  Button,
  Container,
  Grid,
  Avatar,
} from "@mui/material";

export default function Profile({
  activeUser,
  setActiveUser,
  profile,
  setProfile,
}) {
  console.log(activeUser);

  function signOut() {
    logout();
    setActiveUser(null);
  }

  const editProfile = () => {
    setProfile(true);
  };

  return (
    <>
      <PrimarySearchAppBar
        activeUser={activeUser}
        setActiveUser={setActiveUser}
      />
      <Grid
        p={4}
        sx={{
          display: "flex",
          paddingTop: "20px",
          gap: "30px",
          width: "100%",
        }}
      >
        <Grid
          sx={{ flexGrow: "2" }}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <Sort />
          <PostCard />
        </Grid>
        <Grid raised sx={{ flexGrow: "1" }}>
          <Card
            raised
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 4,
              gap: 1,
            }}
          >
            {activeUser ? (
              <Avatar
                src={activeUser.photoURL}
                sx={{ height: "70px", width: "70px" }}
              />
            ) : (
              <Avatar src="" sx={{ height: "70px", width: "70px" }} />
            )}
            <Typography variant="h6">
              {activeUser ? activeUser.displayName : "Guest"}{" "}
            </Typography>
            <Typography variant="h6">
              {" "}
              {activeUser ? activeUser.email : "Guest EMAIL"}{" "}
            </Typography>
            <Button onClick={editProfile} variant="contained" fullWidth>
              Edit Profile
            </Button>
            <Button
              onClick={signOut}
              variant="contained"
              color="error"
              fullWidth
            >
              Sign Out
            </Button>
          </Card>
        </Grid>
      </Grid>
      <Login activeUser={activeUser} />
      <UpdateProfile profile={profile} setProfile={setProfile} />
    </>
  );
}
