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

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
  const [signUpModal, setSignUpModal] = React.useState(true);
  const [loginModal, setLoginModal] = React.useState(false);
  const handleClose = () => {
    setSignUpModal(false);
    setLoginModal(false);
  };
  const handleLoginOpen = () => {
    setLoginModal(true);
    setSignUpModal(false);
  };
  const handleSignUpOpen = () => {
    setSignUpModal(true);
    setLoginModal(false);
  };

  const clearFields = () => {
    setEmail("");
    setPassword("");
  };

  async function signUp(e) {
    await createUserWithEmailAndPassword(auth, email, password);
    await clearFields();
  }

  async function logIn(e) {
    await signInWithEmailAndPassword(auth, email, password);
    await clearFields();
  }

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      if (signUpModal) {
        signUp();
      } else logIn();
    }
  };

  return (
    <>
      <div>
        <Modal
          open={signUpModal}
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
              New to Reddit? Sign up to vote on posts and comments to help
              everyone find the best content.
            </Typography>
            <Typography width="80%" alignSelf="flex-start" paddingBottom="10px">
              By continuing, you are setting up a Reddit account and agree to
              our
              {} <Link>User Agreement</Link> and <Link>Privacy Policy</Link>.
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
              onKeyDown={keyPress}
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
              Already a Redditor?{" "}
              <Link onClick={handleLoginOpen} underlined="none">
                Login
              </Link>
            </Typography>
          </Box>
        </Modal>
      </div>
      <div>
        <Modal
          open={loginModal}
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
              alignSelf="flex-start"
            >
              Log In
            </Typography>
            <Typography width="80%" alignSelf="flex-start" paddingBottom="10px">
              By continuing, you are setting up a Reddit account and agree to
              our
              {} <Link>User Agreement</Link> and <Link>Privacy Policy</Link>.
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
              placeholder="Username..."
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
              onKeyDown={keyPress}
            ></TextField>
            <Button
              type="submit"
              onClick={logIn}
              variant="contained"
              fullWidth
              sx={{ p: 2 }}
            >
              Submit
            </Button>
            <Typography>
              Don't have an account?{" "}
              <Link onClick={handleSignUpOpen} underlined="none">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}
