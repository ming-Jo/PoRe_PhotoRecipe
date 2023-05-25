import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { tokenInstance } from '../../../api/axios';
import Post from '../../../components/card/Post';
import { CardWrap } from './postCardStyle';
import HeaderB from '../../../components/header/HeaderB';
import CommentWrapper from '../../../components/comment/CommentWrapper';
import { Wrap } from '../../../components/card/postStyle';

const PostCard = () => {
  const location = useLocation();
  const postDetailId = { ...location.state };
  console.log(postDetailId);
  const [posts, setPosts] = useState('');

  const getPostDetail = async () => {
    try {
      const res = await tokenInstance.get(`post/${postDetailId.id}`);
      setPosts(res?.post);
    } catch (error) {
      console.log(error.res);
    }
  };
  useEffect(() => {
    getPostDetail();
  }, []);

  return (
    <Wrap className="no-Navbar">
      <HeaderB />
      <CardWrap>
        {posts && <Post posts={posts} />}
        <CommentWrapper posts={posts} postDetailId={postDetailId} />
      </CardWrap>
    </Wrap>
  );
};

export default PostCard;
