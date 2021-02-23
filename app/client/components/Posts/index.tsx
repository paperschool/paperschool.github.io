import React, { FunctionComponent, useState, useEffect} from "react";
import Post from "../Post";
import requestPostsManifest from "./requestPostsManifest";

import { posts } from "./index.scss";

const Posts: FunctionComponent = () => {
    const [postIndexes, setPostIndexes] = useState([]);

    useEffect(() => {
        if(postIndexes.length === 0){
            (async () => {
                const { posts: postsData } = await requestPostsManifest();
                setPostIndexes(postsData);
            })();
        }
    },[postIndexes])

    const postComponents = postIndexes.map((postIndex,index) => 
        <Post postIndex={postIndex} key={`post-${index}`}/>
    )

    return <div className={posts}>
       {
        postComponents.length > 0 
            ? postComponents 
            : "Nothing Posted?!?"
        }   
    </div>
}

export default Posts;