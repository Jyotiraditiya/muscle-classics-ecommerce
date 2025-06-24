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
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Cars for Sale</h1>
            <CarFilter filters={filters} onFilterChange={handleFilterChange} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {filteredCars.map(car => (
                    <CarCard key={car.id} car={car} onAddToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default Cars;