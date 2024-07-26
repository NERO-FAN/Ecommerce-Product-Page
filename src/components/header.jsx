import React from 'react';
import './header.scss'

import cartIcon from '../images/icon-cart.svg';
import profileImage from '../images/image-avatar.png';

const Header = () => {
    return (
        <div className="header-container">
            <div className="left-header">
                <h1>
                    sneakers
                </h1>
                <nav className="header-nav">
                    <a className="header-link">Collections</a>
                    <a className="header-link">Men</a>
                    <a className="header-link">Women</a>
                    <a className="header-link">About</a>
                    <a className="header-link">Contact</a>
                </nav>
            </div>
            <div className="right-header">
                <img src={cartIcon} alt="cart icon" className="cart-icon"/>
                <div>
                    <img src={profileImage} alt="profile image" className="profile-image"/>
                </div>
            </div>
        </div>
    );
};

export default Header;