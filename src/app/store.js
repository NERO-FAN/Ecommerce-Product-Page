import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

export const modifyItems = createSlice({
    name: 'Item Quantity',
    initialState: {
        item: 0,
    },
    reducers: {
        addItem: state => {state.item += 1;},
        removeItem: state => {state.item -= 1;},
    }
});

export const modifyCart = createSlice({
    name: 'Cart Quantity',
    initialState: {
        cartItem: 0,
    },
    reducers: {
        addCartItem: state => {state.cartItem += 1;},
        removeCartItem: state => {state.cartItem -= 1;}
    }
})

export const { addItem, removeItem } = modifyItems.actions;
export const { addCartItem, removeCartItem } = modifyCart.actions;

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