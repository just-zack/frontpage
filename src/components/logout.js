import { signOut } from "firebase/auth";
import auth from "../config/firebase";

import { useEffect } from "react";

export default function logout() {
  signOut(auth)
    .then(() => {
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      console.log("An error happened.");
    });
}
