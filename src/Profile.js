import PrimarySearchAppBar from "./components/Nav_mui";
import Sort from "./components/Sort_Nav";
import PostCard from "./components/Post_Card";

import {
  Card,
  Typography,
  Button,
  Container,
  Grid,
  Avatar,
} from "@mui/material";

export default function Profile({ activeUser }) {
  console.log(activeUser);
  return (
    <>
      <PrimarySearchAppBar activeUser={activeUser} />
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
          <Typography>Posts</Typography>
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
            <Avatar
              sx={{ height: "70px", width: "70px" }}
              src={activeUser.photoURL}
            ></Avatar>
            <Typography variant="h6">{activeUser.displayName} </Typography>
            <Typography variant="h6">{activeUser.email} </Typography>
            <Button variant="contained" fullWidth>
              Edit Profile
            </Button>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
