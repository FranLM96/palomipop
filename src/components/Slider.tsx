import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

// Import images directly with corrected relative paths
import palomitasImage from '../../public/images/slider/palomitas.png';
import frappeImage from '../../public/images/slider/frappe.png';
import pedidosImage from '../../public/images/slider/PEDIDOS.png';

interface Slide {
  id: number;
  src: string; // This will now hold the imported image variable (a string URL)
  alt: string;
  description: string;
  title?: string; // Optional title
  ctaText?: string; // Optional Call to Action text
  ctaLink?: string; // Optional Call to Action link
}

const slides: Slide[] = [
  {
    id: 1,
    src: palomitasImage, // Use imported variable
    alt: 'Palomitas',
    title: '¡Nuevos Sabores de Palomitas!',
    description: 'Disfruta nuestras palomitas en sabores dulces como caramelo o salados como mantequilla y chile.',
    ctaText: 'Ver Sabores',
    ctaLink: '/palomitas',
  },
  {
    id: 2,
    src: frappeImage, // Use imported variable
    alt: 'Frappé',
    title: 'Refrescantes Frappés',
    description: 'Refresca tu día con nuestros frappés cremosos y deliciosos, disponibles en varios sabores.',
    ctaText: 'Explorar Bebidas',
    ctaLink: '/palomitas', // Assuming a '/bebidas' route exists or will exist
  },
  {
    id: 3,
    src: pedidosImage, // Use imported variable
    alt: 'Contáctanos',
    title: 'Haz tu Pedido Ahora',
    description: '¿Tienes dudas o quieres hacer un pedido? ¡Contáctanos por WhatsApp o redes sociales!',
    ctaText: 'Contactar',
    ctaLink: 'https://wa.me/yourwhatsappnumber', // Replace with actual WhatsApp link
  },
];

const Slider: React.FC = () => {
  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <div className="slide-image-container">
                <img src={slide.src} alt={slide.alt} />
              </div>
              <div className="slide-text-container">
                {slide.title && <h2>{slide.title}</h2>}
                {slide.description && <p>{slide.description}</p>}
                {slide.ctaText && slide.ctaLink && (
                  <a href={slide.ctaLink} className="cta-button">
                    {slide.ctaText}
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
