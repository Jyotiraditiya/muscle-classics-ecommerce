import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
    const { removeFromCart, updateQuantity } = useContext(CartContext);

    const handleQuantityChange = (e) => {
        updateQuantity(item.id, e.target.value);
    };

    return (
        <div className="flex justify-between items-center border-b py-4">
            <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mr-4" />
                <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p>{item.year} {item.model}</p>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex items-center">
                <input 
                    type="number" 
                    value={item.quantity} 
                    onChange={handleQuantityChange} 
                    className="w-16 border rounded mr-2"
                    min="1"
                />
                <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;