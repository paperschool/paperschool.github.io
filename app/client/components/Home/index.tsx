import React, { FunctionComponent } from "react";
import Header from "../Header";
import Posts from "../Posts";
import Canvas from "../Canvas";
import { home, postContainer } from "./index.scss";

const Home: FunctionComponent = () => {
    return <div>
        <Canvas/>
        <div className={home}>
            <Header/>
            {/* <div className={postContainer}>
                <Posts />
            </div> */}
        </div>
    </div>
}

export default Home;