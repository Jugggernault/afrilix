import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { BASE_URL } from '../utils';

const WatchPage = () => {
  const [recentlyWatched, setRecentlyWatched] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { accessToken } = useAuth();
  useEffect(() => {
    const fetchRecentlyWatched = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}service/AFRILIX__Afrilix/0.0.1/all-videos?popular=true`,
          {
        headers: {
          'access-token': accessToken,
        },
          }
        );
        if (response.ok) {
          const data = await response.json()
          setRecentlyWatched(data.result);
        } else {
          throw new Error('Erreur lors de la récupération des vidéos');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentlyWatched();
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-black text-white p-4">Chargement...</div>;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white p-4">
        <p>Erreur : {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 pb-20">
      <h1 className="text-2xl font-bold mb-4">Récemment regardés</h1>
      {recentlyWatched.length === 0 ? (
        <p className="text-gray-400">Aucune vidéo disponible pour le moment.</p>
      ) : (
        <div className="space-y-4">
          {recentlyWatched.map((video) => (
            <div key={video.id} className="flex items-center space-x-4">
              <img
                src={video.thumbnail}
                alt={video.name}
                className="w-24 h-16 object-cover rounded"
              />
              <div className="flex-grow">
                <h2 className="font-semibold">{video.name}</h2>
                <p className="text-sm text-gray-400">Année : {video.year}</p>
              </div>
              <Link
                to={`/watch/${video.id}`}
                className="bg-primary text-white rounded-full p-2 hover:bg-primary-dark transition-colors"
              >
                <PlayCircle size={24} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchPage;
