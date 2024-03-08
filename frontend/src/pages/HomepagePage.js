import React from "react";
import HomepageBanner from "../components/Homepage/HomepageBanner";
import ProductsDisplay from "../components/ProductsDisplay";

function HomepagePage() {
    return (
        <main>
            <HomepageBanner/>
            <ProductsDisplay isCarousel={true} productCount={8}/>
        </main>
    )
}

export default HomepagePage;