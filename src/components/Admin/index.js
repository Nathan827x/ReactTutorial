import React, { Component } from "react";

// import { withAuthorization } from "../Session";
import { withFirebase } from "../Firebase";
// import * as ROLES from "../../constants/roles";

class AdminPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: false,
      users: []
    };
  }
  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().onSnapshot(function(querySnapshot) {
      var cities = [];
      querySnapshot.forEach(function(doc) {
        cities.push(doc.data().email);
      });
      console.log("Current cities in CA: ", cities.join(", "));
    });

    //   this.setState({
    //     users: usersList,
    //     loading: false,
    //   });
    // }
  }

  render() {
    return (
      <div>
        <h1>Admin</h1>
        <p>Restricted area! Only users with the admin role are authorized.</p>
      </div>
    );
  }
}
// const condition = authUser => authUser && authUser.roles[ROLES.ADMIN];

export default withFirebase(AdminPage);
