import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CategorySelector from '../components/CategorySelector';
import Section from '../components/Section';
import { videos, categories } from '../data/mockData';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="min-h-screen w-full bg-black">
      <main className="pb-16">
        <HeroSection
          title="Film à la une"
          rating={4.5}
          backgroundImage="https://via.placeholder.com/1920x1080"
        />
        <div className="px-4 py-6">
          <CategorySelector
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
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
