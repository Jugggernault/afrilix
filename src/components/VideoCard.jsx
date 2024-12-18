import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon } from 'lucide-react';
import StarRating from './StarRating';

const VideoCard = ({ id,name, thumbnail, rating,video }) => {
  return (
    <Link to={`/watch/${id}`} className="relative flex-shrink-0 w-[160px] md:w-[200px] h-[240px] md:h-[300px] rounded-lg overflow-hidden">
      <img 
        src={thumbnail} 
        alt={name} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-white text-sm md:text-base font-semibold mb-1 line-clamp-2">{name}</h3>
          <div className="flex justify-between items-center">
            <StarRating rating={rating} />
            <button 
              className="text-white hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // Add to favorites logic here
              }}
            >
              <HeartIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;

