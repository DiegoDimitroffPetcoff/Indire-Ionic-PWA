import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
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
