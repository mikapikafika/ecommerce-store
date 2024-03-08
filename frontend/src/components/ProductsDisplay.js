import React, {useRef} from "react";
import {useScroll, useTransform, motion} from 'framer-motion';
import ProductCard from "./ProductCard";

function ProductDisplay({isCarousel, productCount}) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    const products = Array.from({length: productCount}, (_, index) => {
        return <ProductCard key={index} isFeatured={isCarousel}/>
    });

    if (isCarousel) {
        return (
            <section id="featured-products" ref={targetRef} className="relative bg-white h-[300vh]">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{x}} className="flex gap-4">
                        {products}
                    </motion.div>
                </div>
            </section>
        )
    } else {
        return (
            <section>
                <div className="grid grid-cols-3 auto">
                    {products}
                </div>
            </section>
        )
    }
}

export default ProductDisplay;