import React, { useState, useEffect } from 'react';

const CarFilter = ({ filters: initialFilters = {}, onFilterChange }) => {
    const [filters, setFilters] = useState({
        brand: '',
        year: '',
        model: '',
        type: '',
        price: ''
    });

    useEffect(() => {
        setFilters(prev => ({ ...prev, ...initialFilters }));
    }, [initialFilters]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const next = { ...filters, [name]: value };
        setFilters(next);
        if (onFilterChange) onFilterChange(next);
    };

    return (
        <div className="filters filter-card">
            <div className="filter-card__header">
                <p className="filter-card__eyebrow">Refine</p>
                <h3>Filters</h3>
                <p className="filter-card__helper">Dial in the era and budget that fits your build.</p>
            </div>

            <div className="filter-field">
                <label>Brand</label>
                <select name="brand" value={filters.brand} onChange={handleChange}>
                    <option value="">All Brands</option>
                    <option value="Ford">Ford</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Dodge">Dodge</option>
                </select>
            </div>

            <div className="filter-field">
                <label>Year</label>
                <select name="year" value={filters.year} onChange={handleChange}>
                    <option value="">Any Year</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1967">1967</option>
                </select>
            </div>

            <div className="filter-field">
                <label>Model</label>
                <input type="text" name="model" placeholder="Model" value={filters.model} onChange={handleChange} />
            </div>

            <div className="filter-field">
                <label>Type</label>
                <select name="type" value={filters.type} onChange={handleChange}>
                    <option value="">Any Type</option>
                    <option value="Muscle">Muscle</option>
                    <option value="Classic">Classic</option>
                </select>
            </div>

            <div className="filter-field">
                <label>Max Price</label>
                <input type="number" name="price" placeholder="Max Price" value={filters.price} onChange={handleChange} />
            </div>
        </div>
    );
};

export default CarFilter;