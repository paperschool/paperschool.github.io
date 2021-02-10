import React, { FunctionComponent } from "react";
import Header from "../Header";
import { home } from "./index.scss";

const Home: FunctionComponent = () => {
    return <div className={home}>
        <Header/>
    </div>
}

export default Home;