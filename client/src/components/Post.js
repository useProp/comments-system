import React from 'react';
import {usePostContext} from "../context/PostProvider";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import {useRequestFn} from "../hooks/useRequest";
import commentsService from "../services/comments.service";

const Post = () => {
  const { error, loading, exec: createCommentFn } = useRequestFn(commentsService.createComment);
  const { post, rootComments } = usePostContext();

  const onCommentCreate = (message) => {
    return createCommentFn({ postId: post.id, message }).then(comment => console.log(comment));
  }

  return (
    <>
      <h1>{post.title}</h1>
      <article>{post.body}</article>
      <h3 className={'comments-title'}>Comments</h3>
      <section>
        <CommentForm
          error={error}
          loading={loading}
          onSubmit={onCommentCreate}
        />
        {rootComments && rootComments.length > 0 && <CommentList comments={rootComments}/>}
      </section>
    </>
  );
};

export default Post;
