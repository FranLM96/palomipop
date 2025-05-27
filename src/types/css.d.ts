declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Add this declaration for global CSS imports
declare module '*.css' {
  // No specific exports are expected for global CSS
}
declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';