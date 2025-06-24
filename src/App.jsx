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
        <Navbar />
        <Routes />
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;