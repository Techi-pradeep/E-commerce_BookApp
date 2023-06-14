import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { CartProvider } from './CartContext.jsx';
import { Auth0Provider } from "@auth0/auth0-react";
import { SearchProvider } from './SearchFeature/SearchContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-kh3d75l7bar8hggf.us.auth0.com"
    clientId="7EHbMYXo4zqshLb7vRviU045LCDMWVDS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
{/* here App component is wrapped so that CartContext can access globally throughout the application */}

  <SearchProvider>
<CartProvider>
  <App />
</CartProvider>
    </SearchProvider>


  </Auth0Provider>,
)
