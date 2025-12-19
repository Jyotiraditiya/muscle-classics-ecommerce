import React, { useState } from 'react';
import bookingImage from '../assets/photo-1605571200256-9bf9c42b8f54.avif';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        date: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.service) newErrors.service = 'Service selection is required';
        if (!formData.date) newErrors.date = 'Date is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Handle form submission (e.g., send data to an API)
            console.log('Form submitted:', formData);
            setFormData({
                name: '',
                email: '',
                service: '',
                date: '',
                message: ''
            });
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <div className="booking-form-layout">
                <div className="booking-form-media">
                    <img src={bookingImage} alt="Classic muscle car in workshop" />
                </div>
                <div className="booking-form-body">
                    <h2>Book a Service</h2>
                    <div className="booking-form-fields">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? 'error' : ''}
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">Service</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className={errors.service ? 'error' : ''}
                            >
                                <option value="">Select a service</option>
                                <option value="detailing">Car Detailing</option>
                                <option value="ppf">PPF (Paint Protection Film)</option>
                                <option value="ceramic">Ceramic Coating</option>
                                <option value="custom">Custom Builds</option>
                            </select>
                            {errors.service && <span className="error-message">{errors.service}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Preferred Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className={errors.date ? 'error' : ''}
                            />
                            {errors.date && <span className="error-message">{errors.date}</span>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message (Optional)</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Tell us about your service needs..."
                        />
                    </div>
                    <button type="submit">Book Service</button>
                </div>
            </div>
        </form>
    );
};

export default BookingForm;