import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Providers, ProviderState } from "@microsoft/mgt-element";
import { Msal2Provider } from "@microsoft/mgt-msal2-provider";

Providers.globalProvider = new Msal2Provider({
  clientId: "d58ed348-f9f6-4d18-96b8-235eec7929c7",
});
import * as serviceWorkerRegistration from "../serviceWorkerRegistration.js";
import { PorjectProvider } from "./context/ProjectContext";
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <PorjectProvider>
    <App />
  </PorjectProvider>
);
serviceWorkerRegistration.register();
