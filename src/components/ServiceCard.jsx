import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className="service-card-horizontal">
            <div className="service-card-content">
                <h3 className="service-card-title">{service.name}</h3>
                <p className="service-card-description">{service.description}</p>
                <div className="service-card-details">
                    <div className="service-detail-item">
                        <span className="detail-label">Price:</span>
                        <span className="detail-value">${service.price}</span>
                    </div>
                    <div className="service-detail-item">
                        <span className="detail-label">Duration:</span>
                        <span className="detail-value">{service.duration}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;