import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductBanner from "../components/Store/ProductBanner";
import ProductsGrid from "../components/Store/ProductsGrid";

function StorePage() {
    return (
        <main>
            <Header/>
            <ProductBanner/>
            <ProductsGrid/>
            <Footer/>
        </main>
    )
}

export default StorePage;