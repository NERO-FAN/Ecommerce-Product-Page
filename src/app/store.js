import thumb1 from "../images/image-product-1-thumbnail.jpg"
import thumb2 from "../images/image-product-2-thumbnail.jpg"
import thumb3 from "../images/image-product-3-thumbnail.jpg"
import thumb4 from "../images/image-product-4-thumbnail.jpg"
import fullImage from "../images/image-product-1.jpg"
import fullImage2 from "../images/image-product-2.jpg"
import fullImage3 from "../images/image-product-3.jpg"
import fullImage4 from "../images/image-product-4.jpg"

import { createSlice, combineReducers, configureStore } from "@reduxjs/toolkit";

const exampleDB = [
    {
        id: 12,
        name: "Fall Limited Edition Sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion." +
            " Featuring a durable rubber outer sole, " +
            "they'll withstand everything the weather can offer.",
        discountPrice: "$125.00",
        discountAmount: "50%",
        originalPrice: "$250.00",
        numOfItems: 0
    }
]

export const modifyItems = createSlice({
    name: 'Item Quantity',
    initialState: {
        items: exampleDB
    },
    reducers: {
        addItem: (state, action) => {
            console.log(action);
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            state.items[itemIndex].numOfItems += 1;
        },
        removeItem: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (state.items[itemIndex].numOfItems > 0)
                state.items[itemIndex].numOfItems -= 1;
        },
        resetItem: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            state.items[itemIndex].numOfItems = 0;
        }
    }
});

export const modifyCart = createSlice({
    name: 'Cart Quantity',
    initialState: {
        cartItem: [],
        cartEmpty: true,
        cartClicked: false,
        totalItems: 0
    },
    reducers: {
        addCartItem: (state, action) => {
            const newItem = action.payload;

            if (newItem.numOfItems > 0) {
                if (state.cartEmpty) {
                    state.cartItem.push(newItem);
                    state.cartEmpty = false;
                }
                else {
                    console.log(newItem.id);
                    const cartIndex = state.cartItem.findIndex(cart => cart.id === newItem.id);
                    console.log("I made it past again!");
                    if (cartIndex === -1)
                        state.cartItem.push(newItem);
                    else
                        state.cartItem[cartIndex].numOfItems += newItem.numOfItems;
                }
                state.totalItems += newItem.numOfItems;
            }
        },
        removeCartItem: (state, action) => {
            const cartIndex = state.cartItem.findIndex(cart => cart.id === action.payload.id);
            state.totalItems -= state.cartItem[cartIndex].numOfItems;
            state.cartItem.splice(cartIndex, 1);
            if (state.cartItem.length === 0)
                state.cartEmpty = true;

        },
        clickedCart: state => { state.cartClicked = !state.cartClicked; }
    }
});

export const imageViews = createSlice({
    name: "Selected Thumbnails",
    initialState: {
        thumbnailImages:
            [
                {id: 1, thumb: thumb1, full: fullImage},
                {id: 2, thumb: thumb2, full: fullImage2},
                {id: 3, thumb: thumb3, full: fullImage3},
                {id: 4, thumb: thumb4, full: fullImage4}
            ],
        selectedImage: fullImage
    },
    reducers: {
        changeSelected: (state, action) => {
            const imageID = parseInt(action.payload);
            const fullImg = state.thumbnailImages.filter(image => image.id === imageID);
            state.selectedImage = fullImg[0].full;
        }
    }
})

export const { addItem, removeItem, resetItem } = modifyItems.actions;
export const { addCartItem, removeCartItem, clickedCart } = modifyCart.actions;
export const { changeSelected } = imageViews.actions;

// Combine reducers
const rootReducer = combineReducers({
    items: modifyItems.reducer,
    cart: modifyCart.reducer,
    selectImage: imageViews.reducer
});

// Configure the store with the combined reducer
export const store = configureStore({
    reducer: rootReducer
});

export default store;