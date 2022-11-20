import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">
            <NavLink className="navbar-brand navbar-logo" to="/" exact>
                Web Admin
            </NavLink>

            <button className="navbar-toggler"></button>
            

        </nav>

    )
}
export default Navbar;
