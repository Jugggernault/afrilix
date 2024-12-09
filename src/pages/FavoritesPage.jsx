import React, { useState } from 'react';
import VideoCard from '../components/VideoCard';
import { videos } from '../data/mockData';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState(videos); // Simulate favorited videos

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(video => video.id !== id));
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 pb-20">
      <h1 className="text-2xl font-bold mb-4">Mes favoris</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {favorites.map((video) => (
          <div key={video.id} className="relative">
            <VideoCard {...video} />
            <button
              onClick={() => removeFavorite(video.id)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
