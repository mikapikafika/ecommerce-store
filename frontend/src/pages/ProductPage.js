import React from "react";
import ProductDetails from "../components/Product/ProductDetails";
import ProductPackaging from "../components/Product/ProductPackaging";

function ProductPage() {
    return (
        <main>
            <ProductDetails/>
            <ProductPackaging/>
        </main>
    )
}

export default ProductPage;