import React, { useState } from 'react';


//post form components
function PostForm({ addPost }){

  //arrays to keep track of my states
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');

  //event handler function that handles submit
  function handleSubmit(e){
    //Prevent default form action
    e.preventDefault();

    //condition to help add posts
    if (content && username) {
      addPost({ username, content });
      setContent('');
      setUsername('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
