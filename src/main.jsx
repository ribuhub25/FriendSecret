import { createRoot } from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-67d61syaom1xqmkg.us.auth0.com"
      clientId="mmhvScs5NlhG6SZr50B201IiM4uTkWJE"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "friendSecret",
        scope: "openid profile email"
      }}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);
