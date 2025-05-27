import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider> 
      <App />
    </HelmetProvider>
  </StrictMode>,
)

// Hide preload screen after page load
window.addEventListener('DOMContentLoaded', () => {
  const preloadScreen = document.getElementById('preload-screen');
  if (preloadScreen) {
    preloadScreen.classList.add('hidden');
  }
});
