
const CategorySelector = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
      {categories.map((category) => (
        <button
          key={category?.id}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category?.name
              ? 'bg-primary text-white'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
          onClick={() => onSelectCategory(category?.name)}
        >
          {category?.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
