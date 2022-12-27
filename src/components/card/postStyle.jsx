import styled from 'styled-components';

export const Wrap = styled.div`
  height: calc(100vh - 60px);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PostCard = styled.article`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 40px;
`;

export const User = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserProfile = styled.img`
  width: 42px;
  height: 42px;
  background-color: var(--gray);
  width: 42px;
  height: 42px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 12px;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  margin-top: 3px;
  cursor: pointer;
`;

export const UserName = styled.p`
  font-size: 14px;
`;

export const UserId = styled.p`
  font-size: 12px;
  color: var(--super-gray);
`;

export const More = styled.img`
  position: absolute;
  right: 0;
  width: 22px;
  height: 20px;
  cursor: pointer;
`;

export const PostImg = styled.img`
  width: 350px;
  height: 228px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 20px;
  flex-shrink: 0.02;
  cursor: pointer;
  &.detail-post-img {
    height: 350px;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px 15px 7px;
`;

export const IconImg = styled.img`
  cursor: pointer;
`;

export const IconCount = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 16px 0 0;
  font-size: 12px;
  color: var(--super-gray);
`;

export const PostTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  margin-top: 14px;
`;

export const PostCont = styled.p`
  font-size: 14px;
  margin: 14px 7px;
  cursor: pointer;
`;

export const PostDate = styled.p`
  margin: 0 7px;
  font-size: 10px;
  color: var(--super-gray);
`;

export const ImgWrap = styled.div`
  display: flex;
  width: 350px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
