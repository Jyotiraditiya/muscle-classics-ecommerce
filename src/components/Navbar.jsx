import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);

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

                <div>
                    <button onClick={() => setOpen(o => !o)} style={{background:'transparent',border:'none',color:'#000'}} aria-label="menu">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
                    </button>
                </div>
            </div>

            {open && (
                <div style={{background:'#071331',padding:'8px 0'}}>
                    <div className="site-container" style={{display:'flex',flexDirection:'column'}}>
                        <NavLink exact to="/" onClick={() => setOpen(false)}>Home</NavLink>
                        <NavLink to="/cars" onClick={() => setOpen(false)}>Shop Cars</NavLink>
                        <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
                        <NavLink to="/cart" onClick={() => setOpen(false)}>Cart</NavLink>
                        <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
                        <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;