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

const Body = () => {
    return (
        <div className="body-container">
            <div className="left-body">
                <div className="selectedImage">
                    <img src={fullImage} alt="product-full-size-image" />
                </div>
                <div className="thumbnail-images">
                    <img src={thumb1} alt="product-thumbnail-image"/>
                    <img src={thumb2} alt="product-thumbnail-image"/>
                    <img src={thumb3} alt="product-thumbnail-image"/>
                    <img src={thumb4} alt="product-thumbnail-image"/>
                </div>
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
                        These low profile sneakers are your perfect casual wear companion. Featuring
                        a durable rubber outer sole, they'll withstand everything the weather can offer.
                    </p>
                    <div className="prices-area">
                        <div className="discounted-price">
                            <h2>
                                $125.00
                            </h2>
                            <div>
                                50%
                            </div>
                        </div>
                        <h5 className="original-price">
                            $250.00
                        </h5>
                    </div>
                    <div className="cart-buttons-container">
                        <div className="modify-cart">
                            <button>
                                <img src={Remove} alt="remove-from-cart"/>
                            </button>
                            <span>
                                0
                            </span>
                            <button>
                                <img src={Add} alt="add-to-cart"/>
                            </button>
                        </div>
                        <button className="add-to-cart">
                            <img src={cartImage}/>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;