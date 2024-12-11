import  { useState, useCallback, useEffect } from 'react';
import { SearchIcon } from 'lucide-react';
import { debounce } from 'lodash';
import Section from '../components/Section';
import { videos } from '../data/mockData';
import { BASE_URL } from '../utils';
import { useAuth } from '../context/AuthContext';

const ExplorerPage = () => {
  const [searchResults, setSearchResults] = useState(videos);
  const { accessToken } = useAuth();

  const fetchVideos = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_URL}service/AFRILIX__Afrilix/0.0.1/all-videos`, {
        method: 'GET',
        headers: {
          'access-token': accessToken,
        },
      });

      if (!response.ok) {
        throw new Error('Error fetching videos in explorer');
      }

      const data = await response.json();
      setSearchResults(data.result.slice(0, 5));
    } catch (error) {
      console.error('Failed to fetch videos:', error.message);
    }
  }, [accessToken]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const handleSearch = useCallback(
    debounce((searchTerm) => {
      const filteredVideos = videos.filter((video) =>
        video.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredVideos);
    }, 300),
    [videos]
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="px-4 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher des vidéos..."
              aria-label="Search videos"
              className="w-full bg-white/10 text-white placeholder-gray-400 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="pt-20 px-4 pb-20">
        <Section title="Résultats de recherche" videos={searchResults || []} />
      </div>
    </div>
  );
};

export default ExplorerPage;
