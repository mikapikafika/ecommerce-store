import React from "react";
import {Link} from "react-router-dom";
import "./ProductCard.scss";

function ProductCard({isFeatured, product}) {
    return (
        <Link to="/product">
            <div
                className="product-card uppercase border border-black h-full text-center font-sans flex flex-col bg-white">
                <div className="flex-grow">
                    <img loading="lazy" alt={product.name} src={product.image}/>
                </div>
                <div className={`grid grid-cols-2 h-24 ${isFeatured ? 'w-80' : 'w-full'}`}>
                    <div
                        className="product-add border border-t-black col-span-2 flex justify-center items-center">
                        <p>Add to cart</p>
                    </div>
                    <div className="product-description border border-t-black col-span-2 flex flex-col justify-center items-center">
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;