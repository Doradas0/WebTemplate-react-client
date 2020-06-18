import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Amplify from 'aws-amplify';

import Config from "./Components/Core/Config";
import App from './Components/Core/App';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: Config.cognito.REGION,
    userPoolId: Config.cognito.USER_POOL_ID,
    identityPoolId: Config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: Config.cognito.APP_CLIENT_ID
  },
  API: {
   endpoints: [
     {
       name: Config.apiGateway.Example.NAME,
       endpoint: Config.apiGateway.Example.URL,
       region: Config.apiGateway.Example.REGION,
     },
   ]
 },
 Storage: {
   region: Config.s3.REGION,
   bucket: Config.s3.BUCKET,
   identityPoolId: Config.cognito.IDENTITY_POOL_ID
 }
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// TODO: Review Below
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
