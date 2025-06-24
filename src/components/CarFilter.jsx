import React, { useState } from 'react';

const CarFilter = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        brand: '',
        year: '',
        model: '',
        type: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
        onFilterChange({ ...filters, [name]: value });
    };

    return (
        <div className="flex flex-col space-y-4 p-4">
            <h2 className="text-xl font-bold">Filter Cars</h2>
            <select name="brand" onChange={handleChange} className="border p-2">
                <option value="">Select Brand</option>
                <option value="Ford">Ford</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Dodge">Dodge</option>
                {/* Add more brands as needed */}
            </select>
            <select name="year" onChange={handleChange} className="border p-2">
                <option value="">Select Year</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                {/* Add more years as needed */}
            </select>
            <input
                type="text"
                name="model"
                placeholder="Model"
                onChange={handleChange}
                className="border p-2"
            />
            <select name="type" onChange={handleChange} className="border p-2">
                <option value="">Select Type</option>
                <option value="Muscle">Muscle</option>
                <option value="Classic">Classic</option>
                {/* Add more types as needed */}
            </select>
            <input
                type="number"
                name="price"
                placeholder="Max Price"
                onChange={handleChange}
                className="border p-2"
            />
        </div>
    );
};

export default CarFilter;