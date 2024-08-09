import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Body from './components/body.jsx'
import CartView from "./components/cartView.jsx";
import { useGetStateQuery } from './api/apiSlice.js';

function App() {

    // const {
    //     data: currentState,
    //     isLoading,
    //     isSuccess,
    //     isError,
    //     error
    // } = useGetStateQuery();

    // let content;
    // if (isLoading) {
    //     content = <p>Loading....</p>
    // } else if (isSuccess) {
    //     content = JSON.stringify(currentState);
    // } else if (isError) {
    //     content = <p>{error}</p>
    // }

    return (
        <div className="app-container">
            <Header />
            <Body />
            <CartView />
        </div>
    );
}

export default App;
