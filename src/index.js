import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

//To be refactored
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain="dev-rla16uod.us.auth0.com"
        clientId="cIVNuolllmHiyISVpiK6ETpPEP2WoYN1"
        redirectUri={window.location.origin}
        audience="https://dev-rla16uod.us.auth0.com/api/v2/"
        scope="read:current_user update:current_user_metadata"
      >
        <App />
      </Auth0Provider>,
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
