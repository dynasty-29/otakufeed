import React, { useState } from 'react';
import Header from './components/Header';
import AvatarPicker from './components/AvatarPicker';
import Profile from './components/Profile';
import FanPoll from './components/FanPoll';
import DailyFeed from './components/DailyFeed';
import Badge from './components/Badge';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './index.css'


// app component
function App() {
  const [posts, setPosts] = useState([]);
  const [avatar, setAvatar] = useState('/avatar1.png');
  const [username] = useState('OtakuMaster');
  const [fandoms] = useState(['Anime', 'K-Pop', 'K-Drama']);
  const [karma] = useState(75);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="app">
      {/* App Header */}
      <Header avatar={avatar} />

      {/* Avatar Picker */}
      <AvatarPicker setAvatar={setAvatar} />

      {/* User Profile */}
      <Profile avatar={avatar} username={username} fandoms={fandoms} />

      {/* Karma Badge */}
      <Badge karma={karma} />

      {/* Daily Feed */}
      <DailyFeed />

      {/* Fan Poll */}
      <FanPoll />

      {/* Post Form */}
      <PostForm addPost={addPost} avatar={avatar} username={username} />

      {/* Post List */}
      <PostList posts={posts} />
    </div>
  );
};

export default App;
