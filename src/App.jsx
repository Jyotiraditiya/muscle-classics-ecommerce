import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Routes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app-shell">
          <Navbar />
          <main className="app-main">
            <Routes />
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;