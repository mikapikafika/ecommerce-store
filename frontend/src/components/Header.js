import React from "react";
import Navbar from "./Navbar";
import './Header.css';
import AnnouncementBar from "./AnnouncementBar";

function Header() {
    const textItems = [
        'FREE SHIPPING ON BUNDLES & ORDERS OVER $50',
        'FREE SHIPPING ON BUNDLES & ORDERS OVER $50',
        'FREE SHIPPING ON BUNDLES & ORDERS OVER $50',
    ]
    const textList = textItems.map((text, index) => <p className={`text-center text-zinc-100 marquee-item-${index}`}>{text}</p>);

    return (
        <header className="font-sans">
            <AnnouncementBar/>
            {/*<div className="px-20 py-3 bg-black marquee">*/}
            {/*    <span>{textList}</span>*/}
            {/*</div>*/}
            <Navbar/>
        </header>
    )
}

export default Header;