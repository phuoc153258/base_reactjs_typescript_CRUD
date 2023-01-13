import React from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center nav-box-shadow">
            <a className="navbar-brand" href="/">
                Navbar Reactjs CRUD
            </a>
        </nav>
    );
};

export default Navbar;
