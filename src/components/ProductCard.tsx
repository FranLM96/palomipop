import React from 'react';
import type { ProductSize } from '../data/products'; // Import ProductSize
import '../styles/colors.css';
import './ProductCard.css';

interface ProductCardProps {
  product: ProductSize; // Use ProductSize interface
  onClick: (productSlug: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  // Determine the category class based on 'dulce', 'salado', or 'bebida'
  let categoryClass = '';
  if (product.categorias.includes('dulce')) {
    categoryClass = 'sweet';
  } else if (product.categorias.includes('salado')) {
    categoryClass = 'savory';
  } else if (product.categorias.includes('bebida')) {
    categoryClass = 'bebida';
  }

  const cardClass = `product-card ${categoryClass}`; // Combine base class with category class

  // Construct the full image URL using BASE_URL
  const imageUrl = import.meta.env.BASE_URL + product.imagenUrl.replace(/^\//, ''); // Remove leading slash if present

  return (
    <div className={cardClass} onClick={() => onClick(product.originalSlug)}> {/* Use originalSlug for navigation */}
      {/* Use the constructed imageUrl */}
      <img src={imageUrl} alt={product.nombre} className="product-image" />
      <h3 className="product-name">{product.nombre}</h3> {/* This now includes size name */}
      <p className="product-description">{product.descripcion}</p>
      <p className="product-price">{product.precio}</p> {/* This is the size-specific price */}
    </div>
  );
};

export default ProductCard;