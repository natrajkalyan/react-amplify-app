import React from "react";
import "./App.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Test from "./components/Test";

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div className="App">
            <header className="App-header">
              <button onClick={signOut}>Sign out</button>
              <h2>Welcome {user.attributes.email}</h2>
              <Test/>
            </header>
          </div>
        </main>
      )}
      {/* {console.log(user.signInUserSession.accessToken.jwtToken)} */}
    </Authenticator>
  );
}

export default App;
