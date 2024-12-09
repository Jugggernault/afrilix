import React, { useState, useCallback } from 'react';
import { SearchIcon } from 'lucide-react';
import { debounce } from 'lodash';
import VideoCard from '../components/VideoCard';
import { videos } from '../data/mockData';

const ExplorerPage = () => {
  const [searchResults, setSearchResults] = useState(videos);

  const handleSearch = useCallback(
    debounce((searchTerm) => {
      const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredVideos);
    }, 300),
    []
  );

  return (
    <div className="min-h-screen bg-black text-white p-4 pb-20">
      <div className="sticky top-0 bg-black z-10 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher des vidéos..."
            className="w-full bg-white/10 text-white placeholder-gray-400 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {searchResults.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default ExplorerPage;
