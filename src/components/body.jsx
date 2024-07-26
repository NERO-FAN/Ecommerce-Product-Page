import React from 'react';
import './body.scss'

import thumb1 from "../images/image-product-1-thumbnail.jpg"
import thumb2 from "../images/image-product-2-thumbnail.jpg"
import thumb3 from "../images/image-product-3-thumbnail.jpg"
import thumb4 from "../images/image-product-4-thumbnail.jpg"
import fullImage from "../images/image-product-1.jpg"
import cartImage from "../images/icon-cart.svg"
import Remove from "../images/icon-minus.svg"
import Add from "../images/icon-plus.svg"

import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { addItem } from "../app/store.js";
import { removeItem } from "../app/store.js";
import { addCartItem } from "../app/store.js";

const Body = () => {
    
    const itemCount = useSelector(state => state.items.item);
    const cartCount = useSelector(state => state.cart.cartItem);
    const dispatch = useDispatch();
    
    const changeItems = ( operation ) => {
        operation === 'increment' ? dispatch(addItem()) : dispatch(removeItem());
    }
    
    const modifyCart = () => dispatch(addCartItem());
    
    return (
        <div className="body-container">
            <div className="left-body">
                <div className="selectedImage">
                    <img src={fullImage} alt="product-full-size-image" />
                </div>
                <ul className="thumbnail-images">
                    <li className="selected-thumb">
                        <img src={thumb1} alt="product-thumbnail-image"/>
                    </li>
                    <li>
                        <img src={thumb2} alt="product-thumbnail-image"/>
                    </li>
                    <li>
                        <img src={thumb3} alt="product-thumbnail-image"/>
                    </li>
                    <li>
                        <img src={thumb4} alt="product-thumbnail-image"/>
                    </li>
                </ul>
            </div>
            <div className="right-body">
                <div className="description-container">
                    <h4>
                        SNEAKER COMPANY
                    </h4>
                    <h1>
                        Fall Limited Edition Sneakers
                    </h1>
                    <p>
                        These low-profile sneakers are your perfect casual wear companion. Featuring
                        a durable rubber outer sole, they'll withstand everything the weather can offer.
                    </p>
                    <div className="prices-area">
                        <div className="discounted-price">
                            <h2 className="current-price">
                                $125.00
                            </h2>
                            <div className="discount-amount">
                                50%
                            </div>
                        </div>
                        <div className="original-price">
                            <h4>
                                $250.00
                            </h4>
                        </div>
                    </div>
                    <div className="cart-buttons-container">
                        <div className="modify-cart">
                            <button id="remove-button" onClick={() => changeItems('decrement')}>
                                <img src={Remove} alt="remove-from-cart" style={{fill: 'hsl(27, 100%, 71%)'}}/>
                            </button>
                            <span id="num-of-items">
                                { itemCount }
                            </span>
                            <button id="add-button" onClick={() => changeItems('increment')}>
                                <img src={Add} alt="add-to-cart"/>
                            </button>
                        </div>
                        <button className="add-to-cart" onClick={() => modifyCart()}>
                            <img src={cartImage} alt="cart-image"/>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;