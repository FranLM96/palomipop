import React, { useState, useMemo } from 'react'; // Import useState and useMemo
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productos, flattenProductsBySizes, type ProductSize } from '../data/products'; // Import productos, flattenProductsBySizes, and ProductSize with type-only import
import FilterControls from '../components/FilterControls'; // Import FilterControls
import '../styles/colors.css';
import './Palomitas.css';

const Palomitas: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']); // State for selected categories

  // Define available categories based on the new broader categories
  const availableCategories = ['all', 'bebidas', 'palomitas', 'botanas'];

  const handleProductClick = (productSlug: string) => {
    navigate(`/product/${productSlug}`);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prevSelected => {
      if (category === 'all') {
        return ['all']; // Select only 'all'
      }

      // If 'all' was previously selected, deselect it and select the new category
      if (prevSelected.includes('all')) {
        return [category];
      }

      // If the category is already selected, deselect it
      if (prevSelected.includes(category)) {
        const newSelection = prevSelected.filter(cat => cat !== category);
        // If no categories are selected after deselecting, select 'all'
        return newSelection.length === 0 ? ['all'] : newSelection;
      } else {
        // If the category is not selected, select it
        return [...prevSelected, category];
      }
    });
  };

  // Flatten the products by their sizes
  const flattenedProducts = useMemo(() => flattenProductsBySizes(productos), [productos]);

  // Filter flattened products based on the selected categories
  const filteredProducts = useMemo(() => {
    if (selectedCategories.includes('all')) {
      return flattenedProducts; // Show all if 'all' is selected
    }

    return flattenedProducts.filter(productSize => { // Filter the flattened list
      const isBebida = productSize.categorias.includes('bebida');
      const isBotana = productSize.categorias.includes('botana');
      // A product is a 'palomita' if it's neither a 'bebida' nor a 'botana' based on the new filter logic
      const isPalomita = !isBebida && !isBotana;

      const includeBebidas = selectedCategories.includes('bebidas');
      const includePalomitas = selectedCategories.includes('palomitas');
      const includeBotanas = selectedCategories.includes('botanas');

      // Include the product size if its original product matches any of the selected broader categories
      if (includeBebidas && isBebida) return true;
      if (includePalomitas && isPalomita) return true;
      if (includeBotanas && isBotana) return true;

      return false; // Exclude the product size if its original product doesn't match any selected category
    });
  }, [flattenedProducts, selectedCategories]); // Depend on flattenedProducts and selectedCategories

  return (
    <div className="palomitas-container">
      <h1 className="palomitas-heading">Nuestra Selección de Palomitas y Otros Snacks Irresistibles</h1>
      {/* Filter controls */}
      <FilterControls
        categories={availableCategories}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />

      <div className="product-list">
        {filteredProducts.map(productSize => ( // Map over filteredProducts (which are ProductSize)
          <ProductCard
            key={productSize.id} // Use the unique id from ProductSize
            product={productSize} // Pass the ProductSize object
            onClick={() => handleProductClick(productSize.originalSlug)} // Use originalSlug for navigation
          />
        ))}
      </div>
    </div>
  );
};

export default Palomitas;