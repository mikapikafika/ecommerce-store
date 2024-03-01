import React from "react";
import FeaturedProduct from "./FeaturedProduct";
import {Link} from "react-router-dom";

function FeaturedProductsGrid() {
    const products = Array.from({length: 8}, (_, index) => {
        return <FeaturedProduct key={index}/>
    });
    return (
        <section>
            <div className="grid grid-cols-4 w-full">
                {products}
            </div>
            <Link to="/products" className="block text-center font-sans">VIEW ALL&nbsp;→</Link>
        </section>
    )
}

export default FeaturedProductsGrid;