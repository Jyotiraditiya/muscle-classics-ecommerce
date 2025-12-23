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

    return (
        <section className="cars-page">
            <div className="site-container">
                <header className="cars-header">
                    <p className="cars-eyebrow">Showroom</p>
                    <div className="cars-header__row">
                        <h1>Shop Cars</h1>
                        <span className="cars-count">{filteredCars.length} listed</span>
                    </div>
                    <p className="cars-lede">Curated American muscle and vintage classics ready for your garage.</p>
                </header>

                <div className="cars-layout">
                    <aside className="cars-filter-panel">
                        <CarFilter filters={filters} onFilterChange={setFilters} />
                    </aside>

                    <div className="cars-grid">
                        {filteredCars.length > 0 ? (
                            filteredCars.map((car) => (
                                <CarCard
                                    key={car.name}
                                    car={car}
                                    onAddToCart={() => addToCart(car)}
                                />
                            ))
                        ) : (
                            <div className="cars-empty">
                                <p className="cars-empty__title">No cars found</p>
                                <p className="cars-empty__copy">Try adjusting the filters or clearing the max price.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cars;
