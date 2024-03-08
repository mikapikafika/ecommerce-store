import React from 'react';
import ProductBanner from "../components/Store/ProductBanner";
import ProductsDisplay from "../components/ProductsDisplay";

function StorePage() {
    return (
        <main>
            <ProductBanner/>
            <ProductsDisplay isCarousel={false} productCount={12}/>
        </main>
    )
}

export default StorePage;