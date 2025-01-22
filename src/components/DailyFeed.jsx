import React from 'react';

const dailyQuotes = [
  { category: 'Anime', quote: '“A lesson without pain is meaningless.” – Fullmetal Alchemist: Brotherhood' },
  { category: 'K-Pop', quote: '“Music transcends language, connecting us all.” – BTS' },
  { category: 'K-Drama', quote: '“It’s not over until you give up.” – Itaewon Class' },
];

const DailyFeed = () => {
  const randomQuote = dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)];

  return (
    <div className="daily-feed">
      <h3>Daily Dose of Feels:</h3>
      <p><strong>{randomQuote.category}:</strong> {randomQuote.quote}</p>
    </div>
  );
};

export default DailyFeed;
