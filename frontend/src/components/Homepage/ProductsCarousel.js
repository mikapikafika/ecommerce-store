import React, {useRef} from "react";
import {useScroll, useTransform, motion} from 'framer-motion';
import FeaturedProduct from "./FeaturedProduct";
import {Link} from "react-router-dom";
import './ProductsCarousel.css';

// function ProductsCarousel() {
//     const products = Array.from({length: 8}, (_, index) => {
//         return <FeaturedProduct key={index}/>
//     });
//     return (
//         <section id="featured-products" className="overflow-hidden">
//             <div className="flex flex-row overflow-x-scroll overflow-hidden gap-16 px-20 py-20">
//                 {products}
//                 <Link to="/products" className="block text-center font-sans">VIEW ALL&nbsp;→</Link>
//             </div>
//         </section>
//     )
// }

function ProductsCarousel() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    const products = Array.from({length: 8}, (_, index) => {
        return <FeaturedProduct key={index}/>
    });
    return (
        <section id="featured-products" ref={targetRef} className="relative bg-white h-[300vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{x}} className="flex gap-4">
                    {products}
                </motion.div>
            </div>
        </section>
)
}

export default ProductsCarousel;