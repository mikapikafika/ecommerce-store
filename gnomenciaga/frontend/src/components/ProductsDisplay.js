import React, {useRef} from "react";
import {useScroll, useTransform, motion} from 'framer-motion';
import ProductCard from "./ProductCard";
import {Link} from "react-router-dom";

function ProductDisplay({isCarousel, products}) {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    const productCards = products.map((product, index) => {
        return <ProductCard key={index} isFeatured={isCarousel} product={product}/>
    });

    if (isCarousel) {
        return (
            <section id="featured-products" ref={targetRef} className="relative bg-white h-[300vh]">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{x}} className="flex gap-4">
                        {productCards}
                        <Link to="/store"
                              className="flex items-center justify-center w-96 h-96 text-4xl font-sans uppercase">View
                            all products ➔</Link>
                    </motion.div>
                </div>
            </section>
        )
    } else {
        return (
            <section>
                <div className="grid grid-cols-3 auto">
                    {productCards}
                </div>
            </section>
        )
    }
}

export default ProductDisplay;