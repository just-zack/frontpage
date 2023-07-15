import React, { useState } from "react";
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
  Badge,
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

export default function UpdateProfile({ profile, setProfile }) {
  const [upload, setUpload] = useState(null);

  const avatarTemplate = (
    <Avatar sx={{ width: "80px", height: "80px" }}></Avatar>
  );

  const handleClose = () => {
    setProfile(false);
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
          open={profile}
          onClose={handleClose}
          aria-labelledby="modal-login"
          aria-describedby="modal-login-to-post"
        >
          <Box sx={style}>
            <Typography variant="h5">Edit Profile</Typography>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <IconButton onClick={clearUpload}>
                  <DeleteIcon color="error" />
                </IconButton>
              }
            >
              {upload ? (
                <Avatar
                  src={upload}
                  sx={{ width: "100px", height: "100px" }}
                ></Avatar>
              ) : (
                avatarTemplate
              )}
            </Badge>

            <CardContent sx={{ width: "100%", justifyContent: "flex-start" }}>
              <input
                type="file"
                id="imgUpload"
                name="imageUpload"
                accept=".jpeg,.png,.gif,.mp4"
                onChange={updateUpload}
              />
            </CardContent>
            <TextField
              placeholder="Pick a Username..."
              fullWidth
              required
            ></TextField>
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
            ></CardContent>
            <Button variant="contained" fullWidth>
              Update Profile
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}
