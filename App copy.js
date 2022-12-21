import "./App.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import {withAuthenticator} from '@aws-amplify/ui-react'

// https://stackoverflow.com/questions/70036160/amplifysignout-is-not-exported-from-aws-amplify-ui-react
// https://ui.docs.amplify.aws/react/connected-components/authenticator

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <AmplifySignOut /> */}
        <div>Welcome.. this is where the website content is seen</div>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
