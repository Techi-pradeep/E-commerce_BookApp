// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-kh3d75l7bar8hggf.us.auth0.com"
    clientId="7EHbMYXo4zqshLb7vRviU045LCDMWVDS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >


    <App />


  </Auth0Provider>,
)
