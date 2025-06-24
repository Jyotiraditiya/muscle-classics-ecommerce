import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Muscle Classics</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-400">Home</Link>
                    </li>
                    <li>
                        <Link to="/cars" className="text-white hover:text-gray-400">Shop Cars</Link>
                    </li>
                    <li>
                        <Link to="/services" className="text-white hover:text-gray-400">Services</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="text-white hover:text-gray-400">Cart</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-gray-400">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;