import React from 'react';

const CarCard = ({ car, onAddToCart = () => {} }) => {
    const imgSrc = (car.images && car.images.length > 0) ? car.images[0] : '/assets/homepage.jpeg';

    const modifications = [];
    if (car.modificationOptions) {
        Object.values(car.modificationOptions).forEach(arr => {
            if (Array.isArray(arr)) modifications.push(...arr);
        });
    }

    return (
        <article className="card">
            <img src={imgSrc} alt={`${car.year} ${car.model}`} />
            <div className="card-body">
                <div className="card-title">{car.name}</div>
                <div className="card-meta">{car.year} • {car.model}</div>
                <div className="card-price">${car.price.toLocaleString()}</div>
                <div style={{marginTop:10}}>
                    {modifications.length ? modifications.slice(0,4).map((m,i)=>(<span key={i} style={{display:'inline-block',background:'#f3f4f6',padding:'6px 8px',borderRadius:6,marginRight:6,fontSize:12}}>{m}</span>)) : <span style={{color:'#6b7280'}}>No options</span>}
                </div>
                <div style={{marginTop:12,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <button onClick={()=>onAddToCart(car)} className="btn btn-primary">Add to Cart</button>
                    <div style={{fontWeight:700}}>${car.price.toLocaleString()}</div>
                </div>
            </div>
        </article>
    );
};
export default CarCard;
