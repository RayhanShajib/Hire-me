import React from 'react';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='headerContainer' >
            <div className="container">
                <img className='logo' src={logo} alt=""/>
            </div>
        </div>
    );
};

export default Header;