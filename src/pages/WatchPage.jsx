// import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';
import { videos } from '../data/mockData';

const WatchPage = () => {
  const recentlyWatched = videos.slice(0, 5); // Simulate recently watched videos

  return (
    <div className="min-h-screen bg-black text-white p-4 pb-20">
      <h1 className="text-2xl font-bold mb-4">Récemment regardés</h1>
      <div className="space-y-4">
        {recentlyWatched.map((video) => (
          <div key={video.id} className="flex items-center space-x-4">
            <img src={video.thumbnail} alt={video.title} className="w-24 h-16 object-cover rounded" />
            <div className="flex-grow">
              <h2 className="font-semibold">{video.title}</h2>
              <p className="text-sm text-gray-400">Il y a 2 jours</p>
            </div>
            <Link to={`/watch/${video.id}`} className="bg-primary text-white rounded-full p-2 hover:bg-primary-dark transition-colors">
              <PlayCircle size={24} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
