import React, { FC, useEffect, useState } from "react";
import { Subtract } from "utility-types";
import requestPostsManifest from "./requestPostsManifest";

interface InjectedPostProps {
    postIndexes: number[];
}

const withPostsIndexes = <T extends InjectedPostProps>(Component: FC<T>): FC<Subtract<T, InjectedPostProps>> => ({ ...props }) => {
    
    const [postIndexes, setPostIndexes] = useState([]);

    useEffect(() => {
        if(postIndexes.length > 0){
            requestPostsManifest().then(postsManifest => {
                setPostIndexes(postsManifest.posts);
            })
        }
    },[postIndexes])

    return <Component postIndexes={postIndexes} {...props as T} />;
};


export default withPostsIndexes;

