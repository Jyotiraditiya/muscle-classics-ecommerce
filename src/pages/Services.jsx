import React from 'react';
import ServiceCard from '../components/ServiceCard';
import BookingForm from '../components/BookingForm';
import servicesData from '../data/services.json';

const Services = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {servicesData.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
            <h2 className="text-2xl font-semibold mt-10 mb-4">Book a Service</h2>
            <BookingForm />
        </div>
    );
};

export default Services;