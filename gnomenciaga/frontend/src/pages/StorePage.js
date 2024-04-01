import React, {useEffect, useState} from 'react';
import StoreBanner from "../components/Store/StoreBanner";
import ProductsDisplay from "../components/ProductsDisplay";
import FilterProducts from "../components/Store/FilterProducts";
import { getProducts } from "../backend/getProducts";

function StorePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(products => setProducts(products));
    }, []);

    return (
        <main>
            <StoreBanner/>
            <FilterProducts/>
            <ProductsDisplay isCarousel={false} products={products}/>
        </main>
    )
}

export default StorePage;