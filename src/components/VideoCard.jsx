import React from 'react';
import { HeartIcon } from 'lucide-react';
import StarRating from './StarRating';

const VideoCard = ({ title, thumbnail, rating }) => {
  return (
    <div className="relative flex-shrink-0 w-[160px] md:w-[200px] h-[240px] md:h-[300px] rounded-lg overflow-hidden">
      <img 
        src={thumbnail} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-white text-sm md:text-base font-semibold mb-1 line-clamp-2">{title}</h3>
          <div className="flex justify-between items-center">
            <StarRating rating={rating} />
            <button className="text-white hover:text-primary transition-colors">
              <HeartIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

