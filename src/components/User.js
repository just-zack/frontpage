import auth from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function getUser() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      alert(user.email);
      // ...
    } else {
      // User is signed out
      // ...
      alert("Need to login");
    }
  });
}
