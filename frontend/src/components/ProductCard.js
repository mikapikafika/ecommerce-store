import React from "react";
import {Link} from "react-router-dom";

function ProductCard({isFeatured}) {
    return (
        <Link to="/product">
            <div className="uppercase border border-black h-96 text-center font-sans flex flex-col bg-white">
                <div className="flex-grow">
                    <img loading="lazy" alt="product"/>
                </div>
                <div className={`border border-black grid grid-cols-2 h-24 ${isFeatured ? 'w-80' : 'w-full'}`}>
                    <div className="border border-r-black border-b-black col-span-1 flex justify-center items-center">
                        <p>Add to cart</p>
                    </div>
                    <div className="border border-b-black col-span-1 flex justify-center items-center">
                        <p>Buy now</p>
                    </div>
                    <div className="col-span-2 flex flex-col justify-center items-center">
                        <p>Name</p>
                        <p>Price</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;