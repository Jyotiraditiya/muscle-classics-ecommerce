import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(CartContext);
    const imgSrc = item.image || (item.images && item.images.length > 0 ? item.images[0] : 'https://via.placeholder.com/200x140?text=Car');

    return (
        <article className="cart-item">
            <div className="cart-item__media">
                <img src={imgSrc} alt={item.name} />
            </div>
            <div className="cart-item__body">
                <div className="cart-item__title-row">
                    <h2>{item.name}</h2>
                    <div className="cart-item__actions">
                        <span className="cart-item__price">${item.price?.toFixed(2) || '0.00'}</span>
                        <button
                          className="cart-item__remove"
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remove from cart"
                          title="Remove"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                            <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </button>
                    </div>
                </div>
                <p className="cart-item__meta">{item.year} {item.model}</p>
            </div>
        </article>
    );
};

export default CartItem;