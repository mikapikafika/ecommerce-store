import React from "react";
import FeaturedProduct from "./FeaturedProduct";

function FeaturedProducts() {
    const products = Array.from({length: 8}, (_, index) => {
        return <FeaturedProduct key={index}/>
    });
    return (
        <div>
            <section className="border border-black bg-white h-80">
                {products}
            </section>
        </div>
    )
}

export default FeaturedProducts;