import * as React from "react";
import {
  TextField,
  Modal,
  Box,
  Button,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";

import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";

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

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function signUp(e) {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-login"
        aria-describedby="modal-login-to-post"
      >
        <Box sx={style}>
          <IconButton sx={{ alignSelf: "flex-end" }}>
            <CloseIcon onClick={handleClose} />
          </IconButton>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            fontWeight="700"
          >
            You can vote on posts and comments to help everyone find the best
            content with a Reddit account.
          </Typography>
          <Typography width="80%" alignSelf="flex-start" paddingBottom="10px">
            By continuing, you are setting up a Reddit account and agree to our
            User Agreement and Privacy Policy.
          </Typography>
          <Button
            fullWidth
            variant="outlined"
            sx={{ p: 2, borderRadius: "5px", gap: "20px" }}
          >
            <GoogleIcon />
            <Typography>Continue with Google</Typography>
          </Button>
          <Typography>Or</Typography>
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email..."
            fullWidth
          ></TextField>
          <TextField
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password..."
            fullWidth
          ></TextField>
          <Button
            type="submit"
            onClick={signUp}
            variant="contained"
            fullWidth
            sx={{ p: 2 }}
          >
            Submit
          </Button>
          <Typography>
            Already a member? <Link underlined="none">Login</Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
