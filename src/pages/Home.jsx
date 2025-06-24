import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import carImage from '../assets/images/car-banner.jpg'; // Example image path

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <header className="bg-cover bg-center h-96" style={{ backgroundImage: `url(${carImage})` }}>
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                    <h1 className="text-white text-4xl font-bold">Welcome to Muscle Classics</h1>
                </div>
            </header>
            <main className="flex-grow p-4">
                <section className="text-center my-8">
                    <h2 className="text-2xl font-semibold">Your Destination for Muscle and Classic Cars</h2>
                    <p className="mt-2">Explore our collection of premium muscle cars and classic vehicles.</p>
                    <Link to="/cars" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">
                        Shop Now
                    </Link>
                </section>
                <section className="my-8">
                    <h2 className="text-xl font-semibold">Our Services</h2>
                    <p>We offer a range of services to enhance your vehicle:</p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Car Detailing</li>
                        <li>Paint Protection Film (PPF)</li>
                        <li>Ceramic Coating</li>
                        <li>Custom Builds</li>
                    </ul>
                    <Link to="/services" className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded">
                        Learn More
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;