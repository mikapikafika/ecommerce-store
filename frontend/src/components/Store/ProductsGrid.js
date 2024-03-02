import React from "react";
import Product from "./Product";
import {Link} from "react-router-dom";

function ProductsGrid() {
    const products = Array.from({length: 12}, (_, index) => {
        return <Product key={index}/>
    });
    return (
        <section>
            <div className="grid grid-cols-3 auto">
                {products}
            </div>
        </section>
    )
}

export default ProductsGrid;