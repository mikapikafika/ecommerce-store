import React from "react";
import "./FilterProducts.scss";

function FilterProducts() {
    return (
        <section>
            <div className="flex flex-row justify-between font-sans">
                <form className="max-w-sm">
                    <label htmlFor="category"></label>
                    <select id="category" className="py-2 px-1 text-gray-00 bg-transparent border border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer">
                        <option selected>Choose a category</option>
                        <option value="all">All</option>
                        <option value="clothing">Clothing</option>
                        <option value="shoes">Shoes</option>
                        <option value="accessories">Accessories</option>
                    </select>
                    <label htmlFor="price"></label>
                    <select id="price" className="py-2 px-1 text-gray-00 bg-transparent border border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer">
                        <option selected>Choose price range</option>
                        <option value="all">All</option>
                        <option value="0-50">$0 - $50</option>
                        <option value="50-100">$50 - $100</option>
                        <option value="100-200">$100 - $200</option>
                        <option value="200+">$200+</option>
                    </select>
                    <label htmlFor="size"></label>
                    <select id="size" className="py-2 px-1 text-gray-00 bg-transparent border border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer">
                        <option selected>Choose size</option>
                        <option value="all">All</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                </form>
                <form>
                    <label htmlFor="sort"></label>
                    <select id="sort" className="py-2 px-1 text-gray-00 bg-transparent border border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer">
                        <option selected>Sort by...</option>
                        <option value="featured">Featured</option>
                        <option value="best-selling">Best Selling</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="alphabetically">Alphabetically: A-Z</option>
                        <option value="reverse-alphabetically">Alphabetically: Z-A</option>
                    </select>
                </form>
            </div>
        </section>
    )
}

export default FilterProducts;