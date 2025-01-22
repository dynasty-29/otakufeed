import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.length === 0 ? (
        <p>No posts yet. Be the first to share something!</p>
      ) : (
        posts.map((post, index) => <Post key={index} post={post} />)
      )}
    </div>
  );
};

export default PostList;
