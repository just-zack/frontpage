import {
  Card,
  Typography,
  Avatar,
  TextField,
  Button,
  CardActions,
  IconButton,
  CardContent,
} from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";

export default function NewPostCard({ activeUser }) {
  return (
    <Card
      raised
      sx={{
        padding: "10px",
        marginTop: "20px",
        paddingBottom: "0",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px",
        }}
      >
        {activeUser ? (
          <Avatar
            src={activeUser.photoURL}
            sx={{
              height: "40px",
              width: "40px",
            }}
          />
        ) : (
          <Avatar
            sx={{
              height: "40px",
              width: "40px",
            }}
          />
        )}

        <TextField label="New Post" fullWidth></TextField>
        <Button variant="contained">Post</Button>
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "0",
        }}
      >
        <CardActions disableSpacing>
          <IconButton
            aria-label="hot"
            sx={{ borderRadius: "0px", gap: "10px" }}
          >
            <LocalFireDepartmentIcon />
            <Typography>HOT</Typography>
          </IconButton>
          <IconButton
            aria-label="new"
            sx={{ borderRadius: "0px", gap: "10px" }}
          >
            <HistoryOutlinedIcon />
            <Typography>NEW</Typography>
          </IconButton>
          <IconButton
            aria-label="top"
            sx={{ borderRadius: "0px", gap: "10px" }}
          >
            <AutoGraphOutlinedIcon />
            <Typography>TOP</Typography>
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}
