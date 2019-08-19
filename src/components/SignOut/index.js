import React from "react";
import { withFirebase } from "../Firebase";

const SignOut = ({ firebase }) => (
  <button type="button" onClick={firebase.SignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOut);
