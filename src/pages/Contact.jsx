import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            // Handle form submission (e.g., send data to an API)
            console.log('Form submitted:', formData);
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <div className="site-container contact-hero-content">
                    <p className="eyebrow">Talk to our shop</p>
                    <h1>Contact Muscle Classics</h1>
                    <p className="lead">Drop us a line for build quotes, inventory inquiries, or a visit to the garage.</p>
                    <div className="contact-badges">
                        <span>Same-day call back</span>
                        <span>Secure bookings</span>
                        <span>US-based team</span>
                    </div>
                </div>
            </div>

            <div className="site-container contact-layout">
                <div className="contact-info-card">
                    <div className="contact-info-header">
                        <h3>Visit the garage</h3>
                        <p>We restore, protect, and ship classics nationwide. Call ahead so we can prep your tour.</p>
                    </div>

                    <div className="contact-details-grid">
                        <div className="contact-detail">
                            <span className="label">Address</span>
                            <span>742 Muscle Ave, Detroit, MI 48201</span>
                        </div>
                        <div className="contact-detail">
                            <span className="label">Phone</span>
                            <span>(313) 555-0188</span>
                        </div>
                        <div className="contact-detail">
                            <span className="label">Email</span>
                            <span>team@muscleclassics.com</span>
                        </div>
                        <div className="contact-detail">
                            <span className="label">Hours</span>
                            <span>Mon–Sat • 9am–6pm EST</span>
                        </div>
                    </div>

                    <div className="contact-note">
                        <strong>Need immediate help?</strong> Text us a photo of your car to the shop line for a quick estimate.
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-form-header">
                        <h3>Send a message</h3>
                        <p>We respond within one business day.</p>
                    </div>

                    <div className="contact-form-grid">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? 'has-error' : ''}
                            />
                            {errors.name && <span className="error-text">{errors.name}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'has-error' : ''}
                            />
                            {errors.email && <span className="error-text">{errors.email}</span>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className={errors.message ? 'has-error' : ''}
                        />
                        {errors.message && <span className="error-text">{errors.message}</span>}
                    </div>

                    <div className="contact-actions">
                        <button type="submit">Send message</button>
                        <p className="contact-meta">By sending, you agree to our response policy.</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;