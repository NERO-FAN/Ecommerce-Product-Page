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

import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

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
})

export const { addItem, removeItem, resetItem } = modifyItems.actions;
export const { addCartItem, removeCartItem, clickedCart } = modifyCart.actions;

// Combine reducers
const rootReducer = combineReducers({
    items: modifyItems.reducer,
    cart: modifyCart.reducer
});

// Configure the store with the combined reducer
export const store = configureStore({
    reducer: rootReducer
});

export default store;