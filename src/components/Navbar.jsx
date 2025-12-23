import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const linkClass = "text-white hover:text-gray-300 px-2 py-1 rounded";

    return (
        <nav className="navbar">
            <div className="site-container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <div className="brand">Muscle Classics</div>
                <div className="nav-links" style={{display:'flex',gap:'24px',alignItems:'center'}}>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="/cars" activeClassName="active">Shop Cars</NavLink>
                    <NavLink to="/services" activeClassName="active">Services</NavLink>
                    <NavLink to="/cart" activeClassName="active">Cart</NavLink>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;