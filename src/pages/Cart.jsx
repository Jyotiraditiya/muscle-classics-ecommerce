import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
    const { cartItems, totalAmount } = useContext(CartContext);
    const hasItems = cartItems.length > 0;

    return (
        <section className="cart-page">
            <div className="site-container">
                <header className="cart-hero">
                    <p className="cart-eyebrow">Cart</p>
                    <h1>Your build sheet</h1>
                    <p className="cart-lede">Lock in the classics you want to see in person. We can coordinate inspections, transport, and storage.</p>
                </header>

                {!hasItems ? (
                    <div className="cart-empty">
                        <h2>Your cart is empty</h2>
                        <p>Add cars from the showroom to get started.</p>
                        <a className="cart-cta" href="/cars">Browse cars</a>
                    </div>
                ) : (
                    <div className="cart-grid">
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <CartItem key={item.id || item.name} item={item} />
                            ))}
                        </div>

                        <aside className="cart-summary">
                            <h3>Order summary</h3>
                            <div className="cart-summary__row">
                                <span>Vehicles</span>
                                <span>${totalAmount.toFixed(2)}</span>
                            </div>
                            <div className="cart-summary__row cart-summary__total">
                                <span>Total</span>
                                <span>${totalAmount.toFixed(2)}</span>
                            </div>
                            <button className="cart-checkout">Checkout</button>
                        </aside>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cart;