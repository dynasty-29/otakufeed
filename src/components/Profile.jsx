import React from 'react';

const Profile = ({ avatar, username, fandoms }) => {
  return (
    <div className="profile">
      <img src={avatar} alt="User Avatar" />
      <h3>{username}</h3>
      <p>Fandoms: {fandoms.join(', ')}</p>
    </div>
  );
};

export default Profile;
