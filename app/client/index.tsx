import * as React from "react";
import * as ReactDOM from "react-dom";
// import appContainerProvider from "../server/frontend/documentProvider/appContainerProvider";
// import Router from "./components/Router";
import "./styles/global.scss";

ReactDOM.render(
    <div>
        <h1>H1 - Heading 1</h1>
        <h2>H2 - Heading 2</h2>
        <h3>H3 - Heading 3</h3>
        <h4>H4 - Heading 4</h4>
        <p>Hello World</p>
    </div>,
    document.getElementById("react-app-container")
);
