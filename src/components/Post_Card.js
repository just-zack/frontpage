import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import aww from "../img/aww.png";

//import "../styles/Post_Card.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [votes, setVotes] = React.useState(0);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card raised sx={{ marginTop: "10px", padding: "0" }}>
      <CardContent sx={{ display: "flex" }}>
        <CardContent>
          <IconButton
            aria-label="upvote"
            // NEED TO setup logic so each user account can only upvote once
            onClick={() => {
              setVotes(votes + 1);
            }}
          >
            <ArrowCircleUpOutlinedIcon color="success" fontSize="large" />
          </IconButton>
          <Typography variant="h6">{votes}</Typography>
          <IconButton
            aria-label="upvote"
            // NEED TO setup logic so each user account can only downvote once
            onClick={() => {
              setVotes(votes - 1);
            }}
          >
            <ArrowCircleDownOutlinedIcon color="error" fontSize="large" />
          </IconButton>
        </CardContent>
        <CardContent sx={{ padding: "0", width: "100%" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <CardContent
              sx={{
                paddingLeft: "0px",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              {
                <Avatar
                  sx={{ bgcolor: red[500], height: "25px", width: "25px" }}
                  aria-label="Profile Name"
                  alt="Profile Name"
                >
                  <Typography fontSize="small">S</Typography>
                </Avatar>
              }{" "}
              Posted by u/mbklein 4 hours ago
            </CardContent>
            <Typography variant="h5">Say Hello to my Derpy Friend!</Typography>
          </CardContent>
          <CardContent>
            <CardMedia
              component="img"
              image={aww}
              alt="Paella dish"
              height="300"
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="comment"
              sx={{ borderRadius: "0px", gap: "10px" }}
            >
              <CommentIcon />
              <Typography>2 Comments</Typography>
            </IconButton>
            <IconButton
              aria-label="share"
              sx={{ borderRadius: "0px", gap: "10px" }}
            >
              <ShareIcon />
              <Typography>Share</Typography>
            </IconButton>
            <IconButton
              aria-label="save"
              sx={{ borderRadius: "0px", gap: "10px" }}
            >
              <BookmarkBorderIcon />
              <Typography>Save</Typography>
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        </CardContent>
      </CardContent>
    </Card>
  );
}
