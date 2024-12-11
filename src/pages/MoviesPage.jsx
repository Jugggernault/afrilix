import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import StarRating from '../components/StarRating';
import ReviewModal from '../components/ReviewModal';
import Section from '../components/Section';
import { BASE_URL } from '../utils';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${BASE_URL}service/AFRILIX__Afrilix/0.0.1/video?id=${id}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        if (data.resCode === "0" && data.result.length > 0) {
          const movieData = data.result[0];
          setMovie({
            id: movieData.id,
            title: movieData.name,
            description: movieData.decription,
            videoUrl: movieData.video,
            thumbnail: movieData.thumbnail,
            year: movieData.year,
            rating: 4.5, // Rating par défaut ou récupéré ailleurs
          });
          // Simuler des films similaires (exemple : on pourrait les récupérer via une autre API)
          setSimilarMovies([
            {
              id: '1',
              title: 'Film Similaire 1',
              thumbnail: movieData.thumbnail,
            },
            {
              id: '2',
              title: 'Film Similaire 2',
              thumbnail: movieData.thumbnail,
            },
          ]);
        } else {
          throw new Error('Film introuvable');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-white">Chargement...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  if (!movie) {
    return <div className="min-h-screen flex items-center justify-center text-gray-300">Aucune donnée disponible.</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <VideoPlayer videoUrl={movie.videoUrl} />
      
      <div className="px-4 py-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold">{movie.title}</h1>
            <div className="flex items-center mt-2">
              <StarRating rating={movie.rating} />
              <span className="ml-2">{movie.rating.toFixed(1)}</span>
            </div>
          </div>
          <button 
            onClick={() => setIsReviewModalOpen(true)}
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors"
          >
            Laisser un avis
          </button>
        </div>

        <p className="text-gray-300 mb-6">{movie.description}</p>

        <Section title="Films similaires" videos={similarMovies} />

        <h2 className="text-xl font-semibold mb-4">Commentaires</h2>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Star className="text-yellow-400 w-4 h-4 mr-1" />
                <span className="font-semibold mr-2">4.5</span>
                <span className="text-gray-400">Utilisateur {i}</span>
              </div>
              <p>Ceci est un commentaire d'exemple pour le film. L'utilisateur partage son avis sur le film qu'il vient de regarder.</p>
            </div>
          ))}
        </div>
      </div>

      <ReviewModal 
        isOpen={isReviewModalOpen} 
        onClose={() => setIsReviewModalOpen(false)} 
        onSubmit={(rating, comment) => {
          console.log('Review submitted:', rating, comment);
          setIsReviewModalOpen(false);
        }} 
      />
    </div>
  );
};

export default MoviePage;
