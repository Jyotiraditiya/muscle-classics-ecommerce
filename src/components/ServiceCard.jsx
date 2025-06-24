import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className="border rounded-lg shadow-lg p-4 m-4">
            <h2 className="text-xl font-bold">{service.name}</h2>
            <p className="text-gray-700">{service.description}</p>
            <p className="text-lg font-semibold">Price: ${service.price}</p>
            <img src={service.image} alt={service.name} className="w-full h-48 object-cover rounded" />
        </div>
    );
};

export default ServiceCard;