import React from 'react';
import {usePostContext} from "../context/PostProvider";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const Post = () => {
  const { post, rootComments } = usePostContext();
  return (
    <>
      <h1>{post.title}</h1>
      <article>{post.body}</article>
      <h3 className={'comments-title'}>Comments</h3>
      <section>
        <CommentForm />
        {rootComments && rootComments.length > 0 && <CommentList comments={rootComments}/>}
      </section>
    </>
  );
};

export default Post;
