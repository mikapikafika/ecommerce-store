import React from "react";
import {Link} from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <nav className="flex justify-between px-20 py-10 items-center bg-black">
            <h1 className="text-xl text-zinc-100">
                <Link to="/">LOGO</Link>
            </h1>
            <div className="flex items-center">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-zinc-100" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                    <input className="ml-2 outline-none bg-transparent" type="text" name="search" id="search"
                           placeholder="SEARCH..."/>
                </div>
                <ul className="flex items-center space-x-6">
                    <li className="text-zinc-100">
                        <Link to="/" className="nav-link">HOME</Link>
                    </li>
                    <li className=" text-zinc-100">
                        <Link to="/shop" className="nav-link">STORE</Link>
                    </li>
                    <li className="text-zinc-100">
                        <Link to="/about" className="nav-link">ABOUT</Link>
                    </li>
                    <li className="text-zinc-100">
                        <Link to="/cart" className="nav-link">[CART ICON]</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;