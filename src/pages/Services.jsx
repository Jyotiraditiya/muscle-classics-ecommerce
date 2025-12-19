import React from 'react';
import ServiceCard from '../components/ServiceCard';
import BookingForm from '../components/BookingForm';
import servicesData from '../data/services.json';

const Services = () => {
    return (
        <div className="services-page">
            <div className="services-header">
                <h1>Our Services</h1>
                <p>Comprehensive solutions for your classic and muscle car needs</p>
            </div>
            <div className="services-list">
                {servicesData.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
            <div className="booking-section">
                <h2>Book a Service Today</h2>
                <p>Reserve your service appointment with us</p>
                <BookingForm />
            </div>
        </div>
    );
};

export default Services;