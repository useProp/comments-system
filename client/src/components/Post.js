import React from 'react';
import {usePostContext} from "../context/PostProvider";

const Post = () => {
  const { post } = usePostContext();
  return (
    <div>
      Post
    </div>
  );
};

export default Post;
