import React from "react";
import Navbar from "./Navbar";

function Header() {
    return (
        <header className="font-sans fixed w-full top-0">
            <div className="px-20 py-3 bg-black">
                <p className="text-center text-zinc-100">FREE SHIPPING ON BUNDLES & ORDERS OVER $50</p>
            </div>
            <Navbar/>
        </header>
    )
}

export default Header;