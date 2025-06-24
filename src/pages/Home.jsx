import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CarCard from '../components/CarCard';
import ServiceCard from '../components/ServiceCard';
import { CartContext } from '../context/CartContext';
import heroImg from '../assets/photo-1628149682149-3eb3c488cfb5.avif';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

const featuredCars = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
        alt: 'Mustang',
        title: '1967 Ford Mustang',
        desc: 'A true American classic with modern upgrades.',
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80',
        alt: 'Camaro',
        title: '1969 Chevrolet Camaro',
        desc: 'Iconic muscle, restored to perfection.',
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?auto=format&fit=crop&w=400&q=80',
        alt: 'Challenger',
        title: '1970 Dodge Challenger',
        desc: 'Bold looks and roaring performance.',
    }
];

const Home = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <header className="bg-cover bg-center h-96 relative" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="flex items-center justify-center h-full bg-black bg-opacity-60">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg"
                    >
                        Welcome to Muscle Classics
                    </motion.h1>
                </div>
            </header>
            <main className="flex-grow p-4">
                <motion.section
                    className="text-center my-8"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-2xl font-semibold">Your Destination for Muscle and Classic Cars</h2>
                    <p className="mt-2">Explore our collection of premium muscle cars and classic vehicles.</p>
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link to="/cars" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition-all duration-300">
                            Shop Now
                        </Link>
                    </motion.div>
                </motion.section>

                <motion.section
                    className="my-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h2 className="text-xl font-semibold mb-6 text-center">Featured Cars</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featuredCars.map((car, idx) => (
                            <motion.div
                                key={car.id}
                                whileHover={{ scale: 1.03, y: -8 }}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx }}
                            >
                                <CarCard
                                    car={car}
                                    onAddToCart={() => addToCart(car)}
                                    detailLink={`/cars/${car.id}`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    className="my-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <h2 className="text-xl font-semibold">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto my-4">
                        <ServiceCard title="Car Detailing" />
                        <ServiceCard title="Paint Protection Film (PPF)" />
                        <ServiceCard title="Ceramic Coating" />
                        <ServiceCard title="Custom Builds" />
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link to="/services" className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600 transition-all duration-300">
                            Learn More
                        </Link>
                    </motion.div>
                </motion.section>

                <motion.section
                    className="my-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.7, delay: 0.35 }}
                >
                    <Link to="/booking" className="inline-block bg-yellow-500 text-white py-2 px-6 rounded shadow hover:bg-yellow-600 transition-all duration-300">
                        Book a Test Drive
                    </Link>
                </motion.section>

                <motion.section
                    className="my-12 bg-gray-100 rounded-lg p-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <h2 className="text-xl font-semibold mb-6 text-center">What Our Customers Say</h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        {[
                            {
                                quote: '"Absolutely love my restored Mustang! The team at Muscle Classics exceeded my expectations."',
                                author: '- Alex R.'
                            },
                            {
                                quote: '"Professional service and attention to detail. Highly recommend their ceramic coating."',
                                author: '- Priya S.'
                            },
                            {
                                quote: '"Great selection of classic cars and friendly staff. Will be back for my next project!"',
                                author: '- Mike D.'
                            }
                        ].map((t, idx) => (
                            <motion.div
                                key={t.author}
                                className="bg-white rounded-lg shadow p-4 flex-1"
                                whileHover={{ scale: 1.04, y: -4 }}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx }}
                            >
                                <p className="italic">{t.quote}</p>
                                <div className="mt-2 text-right font-semibold">{t.author}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </main>
        </div>
    );
};

export default Home;
