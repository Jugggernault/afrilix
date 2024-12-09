import React from 'react';
import StarRating from './StarRating';
import { PlayIcon, HeartIcon } from 'lucide-react';

const HeroSection = ({ title, rating, backgroundImage }) => {
  return (
    <div className="relative w-full h-[70vh] md:h-96">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
          <div className="flex items-center mb-4">
            <StarRating rating={rating} />
            <span className="text-white ml-2">{rating.toFixed(1)}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">
              <PlayIcon className="w-5 h-5 mr-2" />
              Lire la vidéo
            </button>
            <button className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm">
              <HeartIcon className="w-5 h-5 mr-2" />
              Ajouter aux favoris
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

