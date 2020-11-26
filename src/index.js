import React from "react";
import ReactDOM from "react-dom";

import App1 from "./App1";
import App from "./App";

ReactDOM.render(
  <div>
    <App1 name="Sara" />
    <App />
  </div>,
  document.getElementById("root")
);
