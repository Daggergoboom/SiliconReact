import React from 'react';

const StarRating = ({ starRating }) => {
  const maxStars = 5;
  const validRating = Math.max(0, Math.min(starRating ?? 0, maxStars)); 
  const filledStars = Math.floor(validRating); 
  const emptyStars = maxStars - filledStars;

  return (
    <div className="star-rating">
      {[...Array(filledStars)].map((_, index) => (
        <i key={index} className="fa-sharp fa-solid fa-star"></i>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <i key={index} className="fa-sharp fa-regular fa-star"></i>
      ))}
    </div>
  );
};

export default StarRating;