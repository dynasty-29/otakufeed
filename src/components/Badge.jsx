import React from 'react';

const Badge = ({ karma }) => {
  let badge = 'Newbie Otaku';
  if (karma > 50) badge = 'Fandom Enthusiast';
  if (karma > 100) badge = 'Ultimate Fan';

  return <div className="badge">Badge: {badge}</div>;
};

export default Badge;
