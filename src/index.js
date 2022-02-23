import React from "react";
import ReactDOM from "react-dom";
import { IconContext } from "react-icons";
import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
