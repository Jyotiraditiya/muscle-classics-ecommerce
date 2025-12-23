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
            console.log('Form submitted:', formData);
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <section className="contact-page">
            <div className="site-container">
                <header className="contact-hero">
                    <p className="contact-eyebrow">Contact</p>
                    <h1>Talk builds, bookings, and sourcing</h1>
                    <p className="contact-lede">Tell us what you are hunting for, ask about an existing listing, or book time to see the showroom in person.</p>
                    <div className="contact-meta">
                        <span>Replies within 1-2 business days</span>
                        <span>Private viewings by appointment</span>
                    </div>
                </header>

                <div className="contact-grid">
                    <div className="contact-form-card">
                        <h2>Send a message</h2>
                        <p className="contact-form-copy">Share the car, era, or budget you have in mind. We will respond with options and next steps.</p>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="contact-form-row">
                                <div className="contact-field">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        aria-invalid={Boolean(errors.name)}
                                    />
                                    {errors.name && <p className="contact-error">{errors.name}</p>}
                                </div>
                                <div className="contact-field">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        aria-invalid={Boolean(errors.email)}
                                    />
                                    {errors.email && <p className="contact-error">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="contact-field">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    aria-invalid={Boolean(errors.message)}
                                />
                                {errors.message && <p className="contact-error">{errors.message}</p>}
                            </div>

                            <button type="submit" className="contact-submit">Send Message</button>
                        </form>
                    </div>

                    <aside className="contact-info">
                        <div className="contact-card">
                            <span className="contact-card__badge">Showroom</span>
                            <h3>Visit Muscle Classics</h3>
                            <p>212 Heritage Ave, Suite 4<br />Detroit, MI 48201</p>
                            <p className="contact-card__meta">Private tours by appointment.</p>
                        </div>

                        <div className="contact-card">
                            <span className="contact-card__badge">Talk to us</span>
                            <h3>Call or email</h3>
                            <p>(313) 555-0168<br />sales@muscleclassics.com</p>
                            <p className="contact-card__meta">Mon–Sat, 9a–6p EST</p>
                        </div>

                        <div className="contact-card">
                            <span className="contact-card__badge">Services</span>
                            <h3>What we can help with</h3>
                            <ul>
                                <li>Vehicle sourcing & inspections</li>
                                <li>Consignment & valuations</li>
                                <li>Restoration scheduling</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Contact;