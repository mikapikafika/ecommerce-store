import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDetails from "../components/Product/ProductDetails";
import ProductPackaging from "../components/Product/ProductPackaging";

function ProductPage() {
    return (
        <main>
            <Header/>
            <ProductDetails/>
            <ProductPackaging/>
            <Footer/>
        </main>
    )
}

export default ProductPage;