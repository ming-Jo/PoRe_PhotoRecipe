import { useState, useEffect } from 'react';
import { tokenInstance } from '../../api/axios';
import { Icon, IconImg, IconCount } from './postStyle';
import heartOn from '../../assets/icons/icon-heart-on.svg';
import heartOff from '../../assets/icons/icon-heart-off.svg';
import chat from '../../assets/icons/icon-chat.svg';

const PostIcon = ({ posts, postDetailId }) => {
  const [like, setLike] = useState('');
  const [heartCount, setHeartCount] = useState(posts.heartCount);

  const handleLike = async () => {
    const postId = posts?.id;

    try {
      if (!like) {
        const res = await tokenInstance.post(`post/${postId}/heart`);
        setHeartCount(res.post.heartCount);
        setLike(true);
      } else {
        const res = await tokenInstance.delete(`post/${postId}/unheart`);
        setHeartCount(res.post.heartCount);
        setLike(false);
      }
    } catch (error) {
      console.log(error.res);
    }
  };

  useEffect(() => {
    setHeartCount(heartCount);
    setLike(posts?.hearted);
  }, []);

  return (
    <Icon>
      <IconCount onClick={handleLike}>
        <IconImg src={like ? heartOn : heartOff} alt="좋아요" />
        {heartCount}
      </IconCount>

      <IconCount onClick={() => postDetailId()}>
        <IconImg src={chat} alt="" />
        {posts.commentCount}
      </IconCount>
    </Icon>
  );
};

export default PostIcon;
