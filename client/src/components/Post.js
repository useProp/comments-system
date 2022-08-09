import React from 'react';
import {usePostContext} from "../context/PostProvider";
import CommentList from "./CommentList";

const Post = () => {
  const { post, rootComments } = usePostContext();
  return (
    <>
      <h1>{post.title}</h1>
      <article>{post.body}</article>
      <h3 className={'comments-title'}>Comments</h3>
      <section>
        {rootComments && rootComments.length > 0 && <CommentList comments={rootComments}/>}
      </section>
    </>
  );
};

export default Post;
