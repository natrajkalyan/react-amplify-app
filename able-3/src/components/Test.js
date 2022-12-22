import React from "react";
import { Auth } from "aws-amplify";
import { Button } from "@aws-amplify/ui-react";

export class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { token: "", tasks: [] };
  }

  componentDidMount() {
    Auth.currentAuthenticatedUser().then((user) => {
      this.setState({ token: user.signInUserSession.idToken.jwtToken });
    });
  }

  getTasks = () => {
    console.log(this.state.token);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", this.state.token);

    fetch("https://732dte6goh.execute-api.ap-south-1.amazonaws.com/dev/tasks", {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on api server!");
        }
      })
      .then((response) => {
        console.log(response);
        this.setState({
          tasks: response.tasks,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    let tasks =
      this.state.tasks &&
      this.state.tasks.map((task) => {
        return (
          <li>
            {task.taskId} - {task.taskDesc}
          </li>
        );
      });

    return (
      <>
        <Button onClick={this.getTasks}>Get Tasks</Button>
        {tasks}
      </>
    );
  }
}

export default Test;
