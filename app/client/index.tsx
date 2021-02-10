import * as React from "react";
import * as ReactDOM from "react-dom";
import withPosts from "./components/withPosts";
import Home from "./components/Home";
import "./styles/global.scss";

const PostReady = withPosts(Home);

ReactDOM.render(
    <PostReady />,
    document.getElementById("react-app-container")
);
