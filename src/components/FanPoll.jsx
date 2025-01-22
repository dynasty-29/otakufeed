import React, { useState } from 'react';

const FanPoll = () => {
  const [votes, setVotes] = useState({ anime: 0, kpop: 0, kdrama: 0 });

  const handleVote = (category) => {
    setVotes({ ...votes, [category]: votes[category] + 1 });
  };

  return (
    <div className="fan-poll">
      <h3>Vote for Your Favorite!</h3>
      <button onClick={() => handleVote('anime')}>Anime ({votes.anime})</button>
      <button onClick={() => handleVote('kpop')}>K-Pop ({votes.kpop})</button>
      <button onClick={() => handleVote('kdrama')}>K-Drama ({votes.kdrama})</button>
    </div>
  );
};

export default FanPoll;
