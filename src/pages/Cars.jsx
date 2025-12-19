import React, { useContext, useEffect, useState } from 'react';
import CarCard from '../components/CarCard';
import CarFilter from '../components/CarFilter';
import { CartContext } from '../context/CartContext';
import carsData from '../data/cars.json';

const Cars = () => {
    const { addToCart } = useContext(CartContext);
    const [filteredCars, setFilteredCars] = useState(carsData);
    const [filters, setFilters] = useState({
        brand: '',
        year: '',
        model: '',
        type: '',
        price: ''
    });

    useEffect(() => {
        const applyFilters = () => {
            let filtered = carsData;

            if (filters.brand) {
                filtered = filtered.filter(car => car.brand === filters.brand);
            }
            if (filters.year) {
                filtered = filtered.filter(car => car.year === filters.year);
            }
            if (filters.model) {
                filtered = filtered.filter(car => car.model === filters.model);
            }
            if (filters.type) {
                filtered = filtered.filter(car => car.type === filters.type);
            }
            if (filters.price) {
                filtered = filtered.filter(car => car.price <= filters.price);
            }

            setFilteredCars(filtered);
        };

        applyFilters();
    }, [filters]);

    const handleFilterChange = (newFilters) => {
        setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
    };

    return (
        <div className="site-container" style={{padding:'24px 16px'}}>
            <h1 style={{fontSize:22,fontWeight:700,marginBottom:12}}>Cars for Sale</h1>
            <div className="container-flex">
                <aside className="sidebar" style={{width:280}}>
                    <CarFilter filters={filters} onFilterChange={handleFilterChange} />
                </aside>
                <div style={{flex:1}}>
                    <div className="grid-3" style={{marginTop:8}}>
                        {filteredCars.map((car, idx) => (
                            <CarCard key={car.name || idx} car={car} onAddToCart={addToCart} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cars;