import React, { FunctionComponent } from "react";

import { postImageContainer, postImage } from "./index.scss";

type PostImageProps = {
    src: string[];
}

const PostImage: FunctionComponent<PostImageProps> = ({ src = [] }) => 
    <div className={postImageContainer}>
        { src.map((imageSrc: string, index: number) => <img className={postImage} src={imageSrc}/>) }
    </div>;


export default PostImage;