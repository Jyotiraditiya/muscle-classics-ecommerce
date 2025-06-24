import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded shadow">
            <h2 className="text-xl font-bold mb-4">Book a Service</h2>
            <div className="mb-4">
                <label className="block mb-1" htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`border rounded w-full p-2 ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1" htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`border rounded w-full p-2 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1" htmlFor="service">Service</label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`border rounded w-full p-2 ${errors.service ? 'border-red-500' : ''}`}
                >
                    <option value="">Select a service</option>
                    <option value="detailing">Car Detailing</option>
                    <option value="ppf">PPF (Paint Protection Film)</option>
                    <option value="ceramic">Ceramic Coating</option>
                    <option value="custom">Custom Builds</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1" htmlFor="date">Preferred Date</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`border rounded w-full p-2 ${errors.date ? 'border-red-500' : ''}`}
                />
                {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1" htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                    rows="4"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Submit</button>
        </form>
    );
};

export default BookingForm;