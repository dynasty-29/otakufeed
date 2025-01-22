import React, { useState } from 'react';

const Post = ({ post }) => {
  const [reactions, setReactions] = useState({ kawaii: 0, senpai: 0, bias: 0 });

  const addReaction = (reaction) => {
    setReactions({ ...reactions, [reaction]: reactions[reaction] + 1 });
  };

  return (
    <div className="post">
      <h3>{post.username}</h3>
      <p>{post.content}</p>
      <div className="reactions">
        <button onClick={() => addReaction('kawaii')}>Kawaii ({reactions.kawaii})</button>
        <button onClick={() => addReaction('senpai')}>Senpai Noticed ({reactions.senpai})</button>
        <button onClick={() => addReaction('bias')}>Bias Wrecked ({reactions.bias})</button>
      </div>
    </div>
  );
};

export default Post;
