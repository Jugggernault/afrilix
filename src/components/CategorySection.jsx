// CategorySection.jsx
import { useState } from 'react';
import CategorySelector from './CategorySelector';
import VideoCard from './VideoCard';

const CategorySection = ({ title, videos, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Filtrer les vidéos en fonction de la catégorie sélectionnée
  const filteredVideos = videos.filter((video) => video.category === selectedCategory?.name);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
      {/* Intégration de CategorySelector */}
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))
        ) : (
          <p className="text-white">Aucune vidéo disponible dans cette catégorie</p>
        )}
      </div>
    </div>
  );
};

export default CategorySection;
