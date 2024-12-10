import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, onRatingChange, editable = false }) => {
  const stars = [1, 2, 3, 4, 5];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < fullStars
              ? 'text-yellow-400'
              : index === fullStars && hasHalfStar
              ? 'text-yellow-400'
              : 'text-gray-300'
          } ${editable ? 'cursor-pointer' : ''}`}
          fill={index < fullStars || (index === fullStars && hasHalfStar) ? 'currentColor' : 'none'}
          onClick={() => editable && onRatingChange && onRatingChange(index + 1)}
        />
      ))}
    </div>
  );
};

export default StarRating;

