import PrimarySearchAppBar from "./components/Nav_mui";
import Sort from "./components/Sort_Nav";

import { Card, Typography, Button, Container, Grid } from "@mui/material";

export default function Profile() {
  return (
    <>
      <PrimarySearchAppBar />
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
        </Grid>
        <Grid raised sx={{ flexGrow: "1" }}>
          <Card>BYE</Card>
        </Grid>
      </Grid>
    </>
  );
}
