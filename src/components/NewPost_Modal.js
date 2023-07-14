import * as React from "react";
import {
  TextField,
  Card,
  Modal,
  Box,
  Button,
  Typography,
  Avatar,
  CardContent,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  paddingTop: "20px",
  gap: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function NewPostModal({ newPost, setNewPost, activeUser }) {
  const [upload, setUpload] = React.useState(null);

  const handleClose = () => {
    setNewPost(false);
    setUpload(null);
  };

  const updateUpload = (e) => {
    setUpload(URL.createObjectURL(e.target.files[0]));
  };

  const clearUpload = (e) => {
    setUpload(null);
  };

  return (
    <>
      <div>
        <Modal
          open={newPost}
          onClose={handleClose}
          aria-labelledby="modal-login"
          aria-describedby="modal-login-to-post"
        >
          <Box sx={style}>
            <Card sx={{ display: "flex", alignItems: "center" }}>
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
              <Typography>UserName</Typography>
            </Card>
            <TextField placeholder="Title..." fullWidth required></TextField>
            <TextField
              placeholder="Description..."
              fullWidth
              multiline
              minRows={4}
            ></TextField>
            <CardContent
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              File Upload (accepts imgs and gifs)
              <div>
                <input
                  type="file"
                  id="imgUpload"
                  name="imageUpload"
                  accept=".jpeg,.png,.gif,.mp4"
                  onChange={updateUpload}
                />
              </div>
              {upload ? (
                <div>
                  <img src={upload} width="100px" />
                  <IconButton color="error" size="small" onClick={clearUpload}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              ) : (
                <div />
              )}
            </CardContent>
            <Button variant="contained" fullWidth>
              Submit Post
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}
