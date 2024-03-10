import React from "react";

function FilterProducts() {
    return (
        <section>
            <div className="flex flex-row justify-between font-sans">
                <form>
                    <label htmlFor="category">Category</label>
                    <select id="category">
                        <option value="all">All</option>
                        <option value="clothing">Clothing</option>
                        <option value="shoes">Shoes</option>
                        <option value="accessories">Accessories</option>
                    </select>
                    <label htmlFor="price">Price</label>
                    <select id="price">
                        <option value="all">All</option>
                        <option value="0-50">$0 - $50</option>
                        <option value="50-100">$50 - $100</option>
                        <option value="100-200">$100 - $200</option>
                        <option value="200+">$200+</option>
                    </select>
                    <label htmlFor="size">Size</label>
                    <select id="size">
                        <option value="all">All</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                    <button type="submit">Filter</button>
                </form>
                <form>
                    <label htmlFor="sort">Sort by</label>
                    <select id="sort">
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