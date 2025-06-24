import React from 'react';

const CarCard = ({ car, onModify }) => {
    return (
        <div className="border rounded-lg p-4 shadow-lg">
            <img src={car.image} alt={`${car.year} ${car.model}`} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-bold mt-2">{car.name}</h2>
            <p className="text-gray-600">{car.year} {car.model}</p>
            <p className="text-lg font-semibold mt-1">${car.price}</p>
            <div className="mt-4">
                <h3 className="font-semibold">Modification Options:</h3>
                <div className="flex flex-col">
                    {car.modifications.map((modification, index) => (
                        <label key={index} className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                onChange={() => onModify(modification)}
                            />
                            {modification}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarCard;