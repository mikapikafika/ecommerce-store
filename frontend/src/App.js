import './App.css';
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
    );
}

export default App;
