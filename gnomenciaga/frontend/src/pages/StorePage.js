import React from 'react';
import StoreBanner from "../components/Store/StoreBanner";
import ProductsDisplay from "../components/ProductsDisplay";
import FilterProducts from "../components/Store/FilterProducts";

function StorePage() {
    return (
        <main>
            <StoreBanner/>
            <FilterProducts/>
            <ProductsDisplay isCarousel={false} productCount={12}/>
        </main>
    )
}

export default StorePage;