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
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                <div>
                    <label className="block mb-1" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div>
                    <label className="block mb-1" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    {errors.message && <p className="text-red-500">{errors.message}</p>}
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;