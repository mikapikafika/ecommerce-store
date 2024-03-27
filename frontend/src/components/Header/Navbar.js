import React from "react";
import {Link} from "react-router-dom";
import './Navbar.scss';

function Navbar({className}) {
    return (
        <nav
            className={`flex justify-between px-20 py-10 items-center bg-black z-50 ${className}`}>
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
                        <Link to="/store" className="nav-link">STORE</Link>
                    </li>
                    <li className="text-zinc-100">
                        <Link to="/about" className="nav-link">ABOUT</Link>
                    </li>
                    <li className="text-zinc-100 relative p-2">
                        <Link to="/checkout" className="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                 fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                            </svg>
                            <span className="absolute top-0 right-0">0</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;