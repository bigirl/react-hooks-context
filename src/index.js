import React from "react";
import ReactDOM from "react-dom";
import PageContextProvider from "./services/PageContextProvider";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </React.StrictMode>,
  rootElement
);
