import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'; // Import the new Footer
import './Layout.css';


const Layout: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer /> {/* Add the Footer here */}
    </div>
  );
};

export default Layout;