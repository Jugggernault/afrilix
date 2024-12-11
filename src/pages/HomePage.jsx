import { useEffect, useState, useCallback } from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import Loader from '../components/Loader';
import CategorySection from '../components/CategorySection';
import { useAuth } from '../context/AuthContext';
import fetchVideos from '../utils/fetchVideos';
import { BASE_URL } from '../utils';

const HomePage = () => {
  const { accessToken, fetchAccessToken } = useAuth();
  const [shortVideos, setShortVideos] = useState([]);
  const [longVideos, setLongVideos] = useState([]);
  const [popularVideos, setPopularVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategories = useCallback(async (token) => {
    try {
      const response = await fetch(`${BASE_URL}service/AFRILIX__Afrilix/0.0.1/categories`, {
        method: 'GET',
        headers: {
          'access-token': token,
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la récupération des catégories : ${response.status}`);
      }

      const data = await response.json();
      setCategories(data);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const fetchAllData = useCallback(async () => {
    if (!accessToken) {
      await fetchAccessToken();
    }
    
    setLoading(true);
    try {
      const { short, long, popular } = await fetchVideos(accessToken, fetchAccessToken);
      setShortVideos(short);
      setLongVideos(long);
      setPopularVideos(popular);
      await fetchCategories(accessToken);
    } catch (err) {
      setError('In ',err.message);
    } finally {
      setLoading(false);
    }
  }, [accessToken, fetchAccessToken, fetchCategories]);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500">{`Erreur : ${error}`}</div>;

  return (
    <div className="min-h-screen w-full bg-black">
      <main className="pb-16">
        <HeroSection
          title="Film à la une"
          rating={4.5}
          backgroundImage="https://via.placeholder.com/1920x1080"
        />
        <div className="px-4 py-6">
          <CategorySection title="Catégories" videos={shortVideos} categories={categories} />
          <div className="mt-6 space-y-8">
            <Section title="Vidéos Courtes" videos={shortVideos} />
            <Section title="Vidéos Longues" videos={longVideos} />
            <Section title="Les Plus Vues" videos={popularVideos} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;

