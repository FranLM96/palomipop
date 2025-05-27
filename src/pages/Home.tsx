import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Slider from '../components/Slider';
import FeaturedProductCard from '../components/FeaturedProductCard'; // Import FeaturedProductCard
import { productos, type Producto } from '../data/products'; // Import products data and type with type-only import
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faBowlFood, faTruckFast } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Logic to select up to 3 featured products from different categories
  const featuredProducts: Producto[] = [];
  const selectedCategories: string[] = [];
  const prioritizedCategories = ['bebida', 'salado', 'dulce'];

  for (const category of prioritizedCategories) {
    if (featuredProducts.length < 3) {
      const product = productos.find(p => p.categorias.includes(category) && !selectedCategories.some(cat => p.categorias.includes(cat)));
      if (product) {
        featuredProducts.push(product);
        selectedCategories.push(category); // Add the prioritized category to selected
        // Add any other categories of the selected product to avoid duplicates from other prioritized categories
        product.categorias.forEach(cat => {
          if (!selectedCategories.includes(cat)) {
            selectedCategories.push(cat);
          }
        });
      }
    } else {
      break; // Stop if we already have 3 featured products
    }
  }

  // Fallback: If we don't have 3 products from prioritized categories,
  // add other products until we have 3, ensuring unique categories.
  if (featuredProducts.length < 3) {
    for (const product of productos) {
      if (featuredProducts.length < 3) {
        const hasSelectedCategory = selectedCategories.some(cat => product.categorias.includes(cat));
        if (!hasSelectedCategory) {
           featuredProducts.push(product);
           product.categorias.forEach(cat => {
             if (!selectedCategories.includes(cat)) {
               selectedCategories.push(cat);
             }
           });
        }
      } else {
        break;
      }
    }
  }


  const handleProductClick = (productSlug: string) => {
    navigate(`/product/${productSlug}`); // Navigate to product detail page
  };

  return (
    <div className="home-container">
      {/* Slider Principal */}
      <Slider />

   {/* Sección Beneficios Creativa */}
<section className="home-section benefits-section">
  <h2 className="benefits-title">Más que Palomitas: Una Experiencia</h2>
  <div className="benefits-grid">
    <div className="benefit-card">
      <div className="benefit-icon">
        <FontAwesomeIcon icon={faSeedling} size="3x" />
      </div>
      <h3>Frescura Garantizada</h3>
      <p>Seleccionamos granos premium y los combinamos con ingredientes reales para lograr el sabor más puro.</p>
    </div>
    <div className="benefit-card">
      <div className="benefit-icon">
        <FontAwesomeIcon icon={faBowlFood} size="3x" />
      </div>
      <h3>Sabor para Todos</h3>
      <p>Desde clásicos mantequillosos hasta mezclas gourmet, cada palomita tiene una historia que contar.</p>
    </div>
    <div className="benefit-card">
      <div className="benefit-icon">
        <FontAwesomeIcon icon={faTruckFast} size="3x" />
      </div>
      <h3>Pop Express</h3>
      <p>Tu antojo no espera. Nosotros tampoco. Envíos rápidos y seguros directo a tu puerta.</p>
    </div>
  </div>
</section>



      {/* Sección Productos Destacados */}
      <section className="home-section featured-products">
        <h2>Productos Destacados</h2>
        <div className="featured-grid">
          {/* Dynamically render FeaturedProductCard components */}
          {featuredProducts.map((product) => (
            <FeaturedProductCard // Use FeaturedProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>
      </section>

      {/* Sección Categorías */}
      <section className="home-section categories-section">
        <h2>Descubre Más Delicias</h2>
        <div className="categories-grid">
          <Link to="/categorias/snacks" className="category-card">
            <img src="/images/palomitas.png" alt="Snacks" />
            <span>Snacks</span>
          </Link>
          <Link to="/categorias/bebidas" className="category-card">
            <img src="/images/smootie.png" alt="Bebidas" />
            <span>Bebidas</span>
          </Link>
          <Link to="/categorias/postres" className="category-card">
            <img src="/images/images/smootie.png" alt="Postres" />
            <span>Postres</span>
          </Link>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="home-section cta-section">
        <h2>¿Listo para probar el pop?</h2>
        <p>Explora nuestra deliciosa selección y encuentra tu favorita.</p>
        <Link to="/palomitas" className="cta-button secondary">
          Ver Todas las Palomitas
        </Link>
      </section>
    </div>
  );
};

export default Home;
