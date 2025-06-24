import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bannerImg from '../assets/homepage.jpeg'; // Fixed image import

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <header className="bg-cover bg-center h-96" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                    <h1 className="text-white text-4xl font-bold">Welcome to Muscle Classics</h1>
                </div>
            </header>
            <main className="flex-grow p-4">
                <section className="text-center my-8">
                    <h2 className="text-2xl font-semibold">Your Destination for Muscle and Classic Cars</h2>
                    <p className="mt-2">Explore our collection of premium muscle cars and classic vehicles.</p>
                    <Link to="/cars" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition">
                        Shop Now
                    </Link>
                </section>

                {/* Featured Cars Section */}
                <section className="my-12">
                    <h2 className="text-xl font-semibold mb-6 text-center">Featured Cars</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80" alt="Mustang" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="font-bold text-lg">1967 Ford Mustang</h3>
                                <p className="text-gray-600 mt-2">A true American classic with modern upgrades.</p>
                                <Link to="/cars/1" className="mt-4 inline-block text-blue-500 hover:underline">View Details</Link>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80" alt="Camaro" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="font-bold text-lg">1969 Chevrolet Camaro</h3>
                                <p className="text-gray-600 mt-2">Iconic muscle, restored to perfection.</p>
                                <Link to="/cars/2" className="mt-4 inline-block text-blue-500 hover:underline">View Details</Link>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?auto=format&fit=crop&w=400&q=80" alt="Challenger" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="font-bold text-lg">1970 Dodge Challenger</h3>
                                <p className="text-gray-600 mt-2">Bold looks and roaring performance.</p>
                                <Link to="/cars/3" className="mt-4 inline-block text-blue-500 hover:underline">View Details</Link>
                            </div>
                        </div>
                    </div>
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
                    <Link to="/services" className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600 transition">
                        Learn More
                    </Link>
                </section>

                {/* Testimonials Section */}
                <section className="my-12 bg-gray-100 rounded-lg p-8">
                    <h2 className="text-xl font-semibold mb-6 text-center">What Our Customers Say</h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <div className="bg-white rounded-lg shadow p-4 flex-1">
                            <p className="italic">"Absolutely love my restored Mustang! The team at Muscle Classics exceeded my expectations."</p>
                            <div className="mt-2 text-right font-semibold">- Alex R.</div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4 flex-1">
                            <p className="italic">"Professional service and attention to detail. Highly recommend their ceramic coating."</p>
                            <div className="mt-2 text-right font-semibold">- Priya S.</div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4 flex-1">
                            <p className="italic">"Great selection of classic cars and friendly staff. Will be back for my next project!"</p>
                            <div className="mt-2 text-right font-semibold">- Mike D.</div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;