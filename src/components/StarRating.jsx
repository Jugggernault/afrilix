import React from 'react';
import { StarIcon } from 'lucide-react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          className={`w-5 h-5 ${
            index < fullStars
              ? 'text-yellow-400'
              : index === fullStars && hasHalfStar
              ? 'text-yellow-400'
              : 'text-gray-300'
          }`}
          fill={index < fullStars || (index === fullStars && hasHalfStar) ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
};

export default StarRating;

