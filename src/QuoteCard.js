import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quote, attribution }) => {
  return (
    <div className="quote-card">
      <blockquote className="quote-text">{quote}</blockquote>
      <p className="quote-attribution">{attribution}</p>
    </div>
  );
};

export default QuoteCard;
