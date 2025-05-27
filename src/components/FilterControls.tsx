import React, { useState } from 'react'; // Import useState
import './FilterControls.css';

interface FilterControlsProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ categories, selectedCategories, onCategoryChange }) => {
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="filter-container"> {/* Use a container div */}
      <button onClick={toggleVisibility} className="filter-toggle-button">
        {isVisible ? 'Ocultar Filtros' : 'Mostrar Filtros'} {/* Button text changes based on visibility */}
      </button>
      {isVisible && ( // Conditionally render filter controls
        <div className="filter-controls">
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategories.includes(category) ? 'active' : ''}
              onClick={() => onCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitalize first letter */}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterControls;