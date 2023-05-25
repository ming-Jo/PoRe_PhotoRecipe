import { useState, useEffect } from 'react';
import { tokenInstance } from '../../api/axios';
import Comment from './Comment';
import { Comments } from '../../pages/PostDetail/PostCard/postCardStyle';
import CommentForm from './CommentForm';

const CommentWrapper = ({ postDetailId }) => {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState('');

  const getComments = async () => {
    try {
      const res = await tokenInstance.get(
        `post/${postDetailId.id}/comments?limit=30`,
      );
      setCommentList(res.comments);
    } catch (error) {
      console.log(error.res);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  const postComment = async () => {
    try {
      const res = await tokenInstance.post(
        `post/${postDetailId?.id}/comments`,
        { comment: { content: `${comment}` } },
      );

      setComment(res.comment.content);
      getComments();
      setComment('');
    } catch (error) {
      console.log(error.res);
    }
  };

  return (
    <>
      <Comments>
        {commentList.map((item) => {
          return commentList ? (
            <Comment
              key={item.id}
              commentList={item}
              setComment={setComment}
              getComments={getComments}
              postDetailId={postDetailId}
            />
          ) : null;
        })}
      </Comments>
      <CommentForm
        postComment={postComment}
        comment={comment}
        setComment={setComment}
      />
    </>
  );
};

export default CommentWrapper;
