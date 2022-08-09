import React, {useState} from 'react';
import {FaEdit, FaHeart, FaReply, FaTrash} from 'react-icons/fa'
import {dateFormatter} from "../utils/dateFormatter";
import IconBtn from "./IconBtn";
import {usePostContext} from "../context/PostProvider";
import CommentList from "./CommentList";

const Comment = ({ comment }) => {
  const { getReplies } = usePostContext();
  const childComments = getReplies(comment.id);
  const [repliesState, setRepliesState] = useState(false);

  return (
    <>
      <div className="comment">
        <div className="header">
          <span className="name">{comment.user.name}</span>
          <span className="date">{dateFormatter.format(Date.parse(comment.createdAt))}</span>
        </div>
        <div className="message">{comment.message}</div>
        <div className="footer">
          <IconBtn
            Icon={FaHeart}
            aria-label={'Like'}
          >
            2
          </IconBtn>
          <IconBtn
            Icon={FaReply}
            aria-label={'Reply'}
          />
          <IconBtn
            Icon={FaEdit}
            aria-label={'Edit'}
          />
          <IconBtn
            Icon={FaTrash}
            aria-label={'Delete'}
            color={'danger'}
          />
        </div>
      </div>
      <div>
        {childComments?.length > 0 && (
          <>
            <div className={`nested-comments-stack ${repliesState ? 'hide' : ''}`}>
              <button
                className={'collapse-line'}
                aria-label={'Hide Replies'}
                onClick={() => setRepliesState(true)}
              />
              <div className={'nested-comments'}>
                <CommentList comments={childComments}/>
              </div>
            </div>
            <button
              className={`btn mt-1 ${!repliesState ? 'hide' : ''}`}
              onClick={() => setRepliesState(false)}
            >
              Show replies
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Comment;
