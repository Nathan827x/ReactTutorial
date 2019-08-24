import React from "react";

import PasswordChangeForm from "../PasswordChange";
import { withAuthorization, AuthUserContext } from "../Session";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account Page</h1>
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => authUser;

export default withAuthorization(condition)(AccountPage);
