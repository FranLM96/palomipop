import React, { useState } from 'react'; // Import useState
import { useParams } from 'react-router-dom'; // Assuming react-router-dom is used for routing
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { productos } from '../data/products'; // Assuming products.ts is created
import '../styles/colors.css'; // Assuming colors.css is created
import './ProductDetail.css'; // Assuming ProductDetail.css will be created for styling

const ProductDetail: React.FC = () => {
  // Get the product slug from the URL
  const { productSlug } = useParams<{ productSlug: string }>();
  // Find the product by slug instead of ID
  const product = productos.find(p => p.slug === productSlug);

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  // Construct the full image URL using BASE_URL
  const imageUrl = import.meta.env.BASE_URL + product.imagenUrl.replace(/^\//, ''); // Remove leading slash if present

  return (
    <> {/* Use a fragment to include Helmet */}
      <Helmet>
        <title>{product.nombre} - Palomipop</title>
        <meta name="description" content={product.descripcion} />
      </Helmet>
<div className="product-detail-container">
  <div className="product-detail-content">
    <div className="product-image-wrapper" onClick={openModal}>
      <img src={imageUrl} alt={product.nombre} className="product-detail-image" />
    </div>
    <div className="product-detail-info">
      <h1 className="product-detail-name">{product.nombre}</h1>
      <p className="product-detail-description">{product.descripcion}</p>
      <p className="product-detail-price">{product.precio}</p>
    </div>
  </div>
</div>


      {/* Modal structure */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking image */}
            <img src={imageUrl} alt={product.nombre} className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;