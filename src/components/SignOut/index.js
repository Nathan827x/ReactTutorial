import React from "react";
import { withFirebase } from "../Firebase";

// TODO This should reroute to the landing page
const SignOut = ({ firebase }) => (
  <button type="button" onClick={firebase.SignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOut);
