import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Body from './components/body.jsx'

function App() {
    return (
        <div className="app-container">
            <Header />
            <Body />
        </div>
    );
}

export default App;
