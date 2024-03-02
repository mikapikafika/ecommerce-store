import './App.css';
import {Route, Routes} from "react-router-dom";
import HomepagePage from "./pages/HomepagePage";
import StorePage from "./pages/StorePage";
import AboutPage from "./pages/AboutPage";
import Checkout from "./pages/Checkout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomepagePage/>}/>
            <Route path="/store" element={<StorePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
    );
}

export default App;
