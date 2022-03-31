import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0 } from "./auth";

const client = new ApolloClient({
  uri: "https://www.dnd5eapi.co/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Auth0Provider
    domain={Auth0.DOMAIN}
    clientId={Auth0.CLIENTID}
    redirectUri={"https://jeanmaster.quest/"}
    // redirectUri={"https://jean-monsieur.github.io/dnd-graphql/"}
    // redirectUri={window.location.origin }
  >
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </Auth0Provider>,
  // document.getElementById("root")
  document.querySelector("#root")
);

reportWebVitals();
