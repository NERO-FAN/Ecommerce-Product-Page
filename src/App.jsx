import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Body from './components/body.jsx'
import CartView from "./components/cartView.jsx";

function App() {
    return (
        <div className="app-container">
            <Header />
            <Body />
            <CartView />
        </div>
    );
}

export default App;
