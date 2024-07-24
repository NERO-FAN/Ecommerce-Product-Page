import { createSlice, configureStore } from '@reduxjs/toolkit';

export const modifyCart = createSlice({
    name: 'Cart Quantity',
    initialState: {
        count: 0,
    },
    reducers: {
        add: state => {state.count += 1;},
        remove: state => {state.count -= 1;},
    }
});

export const { add, remove } = modifyCart.actions

export const store = configureStore({
    reducer: modifyCart.reducer
})