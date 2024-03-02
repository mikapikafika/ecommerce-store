import './App.css';
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import AboutPage from "./pages/AboutPage";
import Checkout from "./pages/Checkout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
    );
}

export default App;
