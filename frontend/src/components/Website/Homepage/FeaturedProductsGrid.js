import React from "react";
import FeaturedProduct from "./FeaturedProduct";
import {Link} from "react-router-dom";
import './FeaturedProductsGrid.css';

function FeaturedProductsGrid() {
    const products = Array.from({length: 8}, (_, index) => {
        return <FeaturedProduct key={index}/>
    });
    return (
        <section>
            <div className="flex flex-row overflow-x-auto gap-16 px-20 py-20">
                {products}
                <Link to="/products" className="block text-center font-sans">VIEW ALL&nbsp;→</Link>
            </div>
        </section>
    )
}

export default FeaturedProductsGrid;