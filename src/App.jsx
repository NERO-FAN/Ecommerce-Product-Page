import './App.css'
import Header from './components/header.jsx'
import Body from './components/body.jsx'
import CartView from "./components/cartView.jsx";

import { useSelector } from "react-redux";

function App() {

    const fullImage = useSelector(state => state.selectImage.selectedImage);

    return (
        <div className="app-container">
            <Header />
            <Body />
            <CartView />
            <div className="main-body">
                <div className="main-area">
                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
                    <img className="selected-full-image" src={fullImage}/>
                </div>
            </div>
        </div>
    );
}

export default App;
