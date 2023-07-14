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
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
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

export default function NewPostModal({ newPost, setNewPost }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signUpModal, setSignUpModal] = React.useState(true);
  const [loginModal, setLoginModal] = React.useState(false);

  const handleClose = () => {
    setNewPost(false);
  };

  const handleOpen = () => {
    setNewPost(true);
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
          open={newPost}
          onClose={handleClose}
          aria-labelledby="modal-login"
          aria-describedby="modal-login-to-post"
        >
          <Box sx={style}>Hello</Box>
        </Modal>
      </div>
    </>
  );
}
