import React from 'react';
import './cartView.scss'

import thumbnailImage from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../images/icon-delete.svg";

import { useEffect } from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { removeCartItem } from "../app/store.js";

const CartView = () => {
    
    const cartEmpty = useSelector(state => state.cart.cartEmpty);
    const cartItems = useSelector(state => state.cart.cartItem);
    const cartClicked = useSelector(state => state.cart.cartClicked);
    const dispatch = useDispatch();
    
    const deleteItem = (item) => {
        dispatch(removeCartItem(item));
    }
    
    useEffect(() => {
        
        const cartContainer = document.getElementById("cart dropdown");
        if (!cartClicked)
            cartContainer.style.display = "none";
        else
            cartContainer.style.display = "inline";
        
    }, [cartClicked]);
    
    useEffect(() => {
        
        const cartElement = document.getElementById("cart-area");
        
        if (!cartEmpty) {
            cartElement.classList.add("cart-items");
            cartElement.classList.remove("cart-items-empty");
        } else {
            cartElement.classList.add("cart-items-empty");
            cartElement.classList.remove("cart-items");
        }
        
    }, [cartEmpty]);
    
    return (
        <div id="cart dropdown" className="cart-container">
            <div className="cart-title">
                Cart
            </div>
            <div id="cart-area">
                {
                    cartEmpty ? "Your cart is empty." :
                        cartItems.map((item, index) => (
                            <div key={index} id={item.id} className={`item-container`}>
                                <img src={thumbnailImage}/>
                                <div className="item-description">
                                    <div>{ item.name }</div>
                                    <div>{ item.discountPrice } x { item.numOfItems } <strong>$375.00</strong></div>
                                </div>
                                <button onClick={() => deleteItem(item)}>
                                    <img src={deleteIcon}/>
                                </button>
                            </div>
                        ))
                }
                {!cartEmpty && (
                    <button id="checkout-btn">
                        Checkout
                    </button>
                )}
            </div>
        </div>
    );
};

export default CartView;
