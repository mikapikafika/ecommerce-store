import React from "react";
import HomepageBanner from "../components/Homepage/HomepageBanner";
import ProductsCarousel from "../components/Homepage/ProductsCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomepagePage() {
    return (
        <main>
            <Header/>
            <HomepageBanner/>
            <ProductsCarousel/>
            <Footer/>
        </main>
    )
}

export default HomepagePage;