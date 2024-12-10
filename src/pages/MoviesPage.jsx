import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, MessageCircle } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import StarRating from '../components/StarRating';
import ReviewModal from '../components/ReviewModal';
import Section from '../components/Section';
import { videos } from '../data/mockData';

const MoviePage = () => {
  const { id } = useParams();
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  
  // Simuler la récupération des données du film
  const movie = videos.find(v => v.id.toString() === id) || videos[0];
  const similarMovies = videos.slice(0, 4); // Simuler des films similaires

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <VideoPlayer videoUrl={movie.videoUrl || 'https://example.com/video.mp4'} />
      
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

        <p className="text-gray-300 mb-6">{movie.description || "Description du film non disponible."}</p>

        <Section title="Films similaires" videos={similarMovies} />

        <h2 className="text-xl font-semibold mb-4">Commentaires</h2>
        <div className="space-y-4">
          {/* Simuler des commentaires */}
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

