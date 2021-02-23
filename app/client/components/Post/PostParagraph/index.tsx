import React, { FunctionComponent, useState, useEffect} from "react";

// import { post } from "./index.scss";

type PostParagraphProps = {
    text: string;
}

const PostParagraph: FunctionComponent<PostParagraphProps> = ({ text }) => 
    <p>{text}</p>


export default PostParagraph;