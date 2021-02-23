import React, { FunctionComponent, useState, useEffect} from "react";
import PostParagraph from "./PostParagraph";
import PostImage from "./PostImage";

import requestPost from "./requestPost";

import { post } from "./index.scss";

type PostProps = {
    postIndex: number;
}

const Post: FunctionComponent<PostProps> = ({ postIndex }) => {
    const [postData, setPost] = useState(undefined);

    useEffect(() => {
        if(postData === undefined){
            (async () => {
                setPost(await requestPost({ postIndex }));
            })();
        }
    },[postData])

    const postComponent = !postData ? null : (<div className={post}>
        <h2>{postData.title}</h2>
        {
            postData.contents.map(({ content, type }: any, index: number) => {
                if(type === "paragraph"){
                    return <PostParagraph text={content} />
                }
                if(type === "image"){
                    const imageSrcs = content.map((imageSrc: string) => `posts/${postIndex}/${imageSrc}`);;
                    return <PostImage src={imageSrcs}/>;
                }
            })
        }

    </div>)

    return postComponent;
}

export default Post;