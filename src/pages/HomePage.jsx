import React from 'react'
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import { videos, categories } from '../data/mockData';
import CategorySection from '../components/CategorySection';
import { BASE_URL,CLIENT_ID,CLIENT_SECRET } from '../utils';
const HomePage = () => {
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BASE_URL}/service/AFRILIX__Afrilix/0.0.1/categories`,{method:'GET',headers:{"access-token":'0000000001IYLiDVLSQT:nUhlbyfgpRZazP8nuYBOY/I1om34LWy4dYy50PpX6EA='}});
      if (!response.ok) {
        throw new Error(`Erreur : ${response.status}`);
      }
      const data = await response.json();
      console.log(data)
      setCategories(data); // Mettre à jour l'état des catégories
      setLoading(false);    // Fin du chargement
    } catch (err) {
      setError(err.message); // Mettre à jour l'état d'erreur
      setLoading(false);     // Fin du chargement
    }
  };

  // Utiliser useEffect pour appeler la fonction lors du premier rendu
  React.useEffect(() => {
    fetchCategories();
  }, []); 

  if (loading) {
    return <p>Chargement des catégories...</p>;
  }

  return (
    <div className="min-h-screen w-full bg-black">
      <main className="pb-16">
        <HeroSection
          title="Film à la une"
          rating={4.5}
          backgroundImage="https://via.placeholder.com/1920x1080"
        />
        <div className="px-4 py-6">
        <CategorySection title="Catégories" videos={videos} categories={categories} />
          <div className="mt-6 space-y-8">
            <Section title="Vidéos Courtes" videos={videos} />
            <Section title="Vidéos Longues" videos={videos} />
            <Section title="Les Plus Vues" videos={videos} />
            <Section title="Recommandées pour Vous" videos={videos} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
