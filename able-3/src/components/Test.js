import React from "react";
import { Cache, Auth } from "aws-amplify";

export class Test extends React.Component {
  constructor(props) {
    super(props);
    Auth.currentAuthenticatedUser().then((user) =>
      console.log(user.signInUserSession.idToken.jwtToken)
    );
  }
  render() {
    return <>Hello</>;
  }
}

export default Test;
