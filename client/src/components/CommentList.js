import React from 'react';
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map(comment => (
        <div
          key={comment.id}
          className={'comment-stack'}
        >
          <Comment
            comment={comment}
          />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
