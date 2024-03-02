import React from "react";
import Welcome from "../components/Homepage/Welcome";
import FeaturedProductsGrid from "../components/Homepage/FeaturedProductsGrid";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Homepage() {
    return (
        <main>
            <Header/>
            <Welcome/>
            <FeaturedProductsGrid/>
            <Footer/>
        </main>
    )
}

export default Homepage;