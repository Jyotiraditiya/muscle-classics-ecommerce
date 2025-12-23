import React from 'react';

const CarCard = ({ car, onAddToCart = () => {} }) => {
    const imgSrc = car.img || (car.images && car.images.length > 0 ? car.images[0] : 'https://via.placeholder.com/300x200?text=Car');
    const carName = car.title || car.name || 'Muscle Car';
    const carPrice = car.price || 0;

    return (
        <article className="car-card">
            <div className="car-card__media">
                <img src={imgSrc} alt={carName} />
                <span className="car-card__badge">Featured</span>
            </div>
            <div className="car-card__body">
                <div className="car-card__title">{carName}</div>
                <div className="car-card__meta">{car.year} • {car.model || car.alt}</div>
                <div className="car-card__price">${carPrice.toLocaleString()}</div>
                <div className="car-card__actions">
                    <button className="btn btn-add" onClick={() => onAddToCart(car)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </article>
    );
};
export default CarCard;
