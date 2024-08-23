import './body.scss'
import ItemImages from "./itemImages";

import cartImage from "../images/icon-cart.svg"
import Remove from "../images/icon-minus.svg"
import Add from "../images/icon-plus.svg"

import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { addItem } from "../app/store.js";
import { removeItem } from "../app/store.js";
import { resetItem } from "../app/store.js";
import { addCartItem } from "../app/store.js";

const Body = () => {

    const itemIndex = 12;
    const item = useSelector(state => state.items.items).filter(item => item.id === itemIndex)[0];
    const dispatch = useDispatch();
    
    const changeItems = ( operation ) => {
        operation === 'increment' ? dispatch(addItem(itemIndex)) : dispatch(removeItem(itemIndex));
    }
    
    const modifyCart = () => {
        dispatch(addCartItem(item));
        dispatch(resetItem(itemIndex));
    }
    
    return (
        <div className="body-container">
            <ItemImages/>
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
                                <img src={Remove} alt="remove-from-cart"/>
                            </button>
                            <span id="num-of-items">
                                { item.numOfItems }
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