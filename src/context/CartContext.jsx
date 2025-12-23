import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
        const normalized = {
            id,
            name: item.name || item.title || 'Car',
            model: item.model || item.alt || '',
            year: item.year || '',
            price: item.price || 0,
            image: (item.image || (Array.isArray(item.images) && item.images[0]) || null),
            images: item.images || [],
            ...item
        };
        setCartItems((prevItems) => [...prevItems, normalized]);
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const totalItems = cartItems.length;
    const totalAmount = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalItems, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};
