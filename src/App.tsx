import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Palomitas from './pages/Palomitas';
import ProductDetail from './pages/ProductDetail'; // Import ProductDetail
import './App.css'; // Keep existing App styles if needed
import './styles/colors.css'; // Import global colors

function App() {
  return (
    <Router basename="/palomipop/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="palomitas" element={<Palomitas />} />
          <Route path="product/:productSlug" element={<ProductDetail />} /> {/* Change route parameter to productSlug */}
          {/* Add a catch-all route for 404 if desired */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
