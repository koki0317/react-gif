import '../assets/stylesheets/application.scss';

import React from "react";
import ReactDom from "react-dom/client";

import App from "./components/App";

const rootContainer = document.querySelector("#root");

if (rootContainer) {
  const root = ReactDom.createRoot(rootContainer);
  root.render(<App />);
}
