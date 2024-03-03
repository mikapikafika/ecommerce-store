import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDetails from "../components/Product/ProductDetails";

function ProductPage() {
    return (
        <main>
            <Header/>
            <ProductDetails/>
            <Footer/>
        </main>
    )
}

export default ProductPage;