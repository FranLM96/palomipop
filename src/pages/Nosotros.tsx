import React from 'react';
import './Nosotros.css';

const Nosotros: React.FC = () => {
  return (
    <div className="nosotros-container">
      <h1>Conoce Palomipop</h1>

      <section className="nosotros-section">
        <h2>¿Quiénes Somos?</h2>
        <p>
          En <strong>Palomipop</strong>, llevamos la pasión por las palomitas al siguiente nivel. Nacimos del amor por lo diferente, lo divertido y lo delicioso. 
          No solo hacemos snacks, ¡creamos experiencias llenas de sabor y alegría en cada bolsa!
        </p>
      </section>

      <section className="nosotros-section">
        <h2>Nuestra Misión</h2>
        <p>
          Sorprender tus sentidos con sabores únicos, calidad excepcional y un toque de locura pop. Queremos convertir 
          cada momento —ya sea una peli, una reunión o un antojo inesperado— en una fiesta de sabor.
        </p>
      </section>

      <section className="nosotros-section">
        <h2>Lo Que Nos Mueve</h2>
        <ul>
          <li>🎉 Creatividad en cada receta</li>
          <li>🌽 Ingredientes naturales y de calidad</li>
          <li>💛 Amor por lo artesanal y auténtico</li>
          <li>🌈 Diversión, color y sabor en cada empaque</li>
        </ul>
      </section>
    </div>
  );
};

export default Nosotros;
