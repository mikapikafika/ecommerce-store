import './App.css';
import {Route, Routes} from "react-router-dom";
import HomepagePage from "./pages/HomepagePage";
import StorePage from "./pages/StorePage";
import AboutPage from "./pages/AboutPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductPage from "./pages/ProductPage";
import Header from "./components/WebsiteSkeleton/Header";
import Footer from "./components/WebsiteSkeleton/Footer";

function App() {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <Header/>
            <Routes className="flex-grow">
                <Route path="/" element={<HomepagePage/>}/>
                <Route path="/store" element={<StorePage/>}/>
                <Route path="/product" element={<ProductPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/checkout" element={<CheckoutPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
