import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }

    return (
        <nav className='p-3'>
            <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
            <NavLink to="/service" activeStyle={activeStyle}>Services</NavLink>
            <NavLink to="/about" activeStyle={activeStyle}>About Us</NavLink>
            <NavLink to="/contact" activeStyle={activeStyle}>Contact Us</NavLink>
        </nav>
    );
};

export default Header;