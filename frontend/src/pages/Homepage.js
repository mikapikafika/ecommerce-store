import React from "react";
import Welcome from "../components/Website/Homepage/Welcome";
import FeaturedProductsGrid from "../components/Website/Homepage/FeaturedProductsGrid";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";

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