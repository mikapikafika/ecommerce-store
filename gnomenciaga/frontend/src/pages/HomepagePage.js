import React, {useState, useEffect} from "react";
import HomepageBanner from "../components/Homepage/HomepageBanner";
import ProductsDisplay from "../components/ProductsDisplay";
import HomepageSection from "../components/Homepage/HomepageSection";
// import { getProducts } from "../../../backend/getProducts";

function HomepagePage() {
    const [showPopUp, setShowPopUp] = useState(false);
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        return null;
    }

    useEffect(() => {
        if (!localStorage.getItem('popUpShown')) {
            const timer = setTimeout(() => {
                setShowPopUp(true);
                localStorage.setItem('popUpShown', 'true');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        getProducts().then(products => setProducts(products));
    }, []);

    return (
        <main>
            <HomepageBanner/>
            <ProductsDisplay isCarousel={true} productCount={8} products={products}/>
            {showPopUp && <PopUp closePopUp={() => setShowPopUp(false)}/>}
            <HomepageSection header="Limited time offer: Gnomenciaga exclusive" text="Unleash the magic with our special promotion - buy any two gnomes and get the third one for FREE! Hurry, this offer won't last long."/>
            <HomepageSection header="Welcome to Gnomenciaga" text="Where Gnome Magic Meets High Fashion! Explore our curated collection of enchanting garden guardians, each a masterpiece of style and mystery. Elevate your outdoor space with our iconic gnomes and unleash the magic in every corner of your garden. Shop now and step into a world of whimsy with Gnomenciaga!"/>
        </main>
    )
}

function PopUp({closePopUp}) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 flex flex-row w-3/5">
                <h2 className="text-2xl font-bold">This popup is very much a work in progress</h2>
                <p>Don't mind me</p>
                <form>
                    <input type="email" placeholder="Enter your email"/>
                    <button type="submit">Sign Up</button>
                </form>
                <button onClick={closePopUp}>Close</button>
            </div>
        </div>
    )
}

export default HomepagePage;