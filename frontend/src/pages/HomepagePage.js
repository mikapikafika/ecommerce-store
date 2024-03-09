import React, {useState, useEffect} from "react";
import HomepageBanner from "../components/Homepage/HomepageBanner";
import ProductsDisplay from "../components/ProductsDisplay";

function HomepagePage() {
    const [showPopUp, setShowPopUp] = useState(false);
    useEffect(() => {
        if (!localStorage.getItem('popUpShown')) {
            const timer = setTimeout(() => {
                setShowPopUp(true);
                localStorage.setItem('popUpShown', 'true');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <main>
            <HomepageBanner/>
            <ProductsDisplay isCarousel={true} productCount={8}/>
            {showPopUp && <PopUp closePopUp={() => setShowPopUp(false)}/>}
        </main>
    )
}

function PopUp({closePopUp}) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg">
                <h2 className="text-2xl font-bold">Welcome to our store</h2>
                <p>Get 10% off your first order when you sign up for our newsletter</p>
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