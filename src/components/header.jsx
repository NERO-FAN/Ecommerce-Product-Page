import React, {useEffect} from 'react';
import './header.scss';

import cartIcon from '../images/icon-cart.svg';
import profileImage from '../images/image-avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import { clickedCart } from "../app/store.js";

const Header = () => {
    
    const numOfCartItems = useSelector(state => state.cart.totalItems);
    const dispatch = useDispatch();
    
    const changeView = () => dispatch(clickedCart());
    
    useEffect(() => {
        const whatever = document.getElementById("items in cart");
        
        if (numOfCartItems === 0)
            whatever.style.display = 'none';
        else
            whatever.style.display = 'flex';
    })
    
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
                <div className="image-container">
                    <div id="items in cart" className="cart-value">
                        { numOfCartItems }
                    </div>
                    <button onClick={() => changeView()}>
                        <img src={cartIcon} alt="cart icon" className="cart-icon"/>
                    </button>
                </div>
                <div className="profile-container">
                    <img src={profileImage} alt="profile image" className="profile-image"/>
                </div>
            </div>
        </div>
    );
};

export default Header;