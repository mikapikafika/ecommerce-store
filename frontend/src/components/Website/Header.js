import React from "react";

function Header() {
    return (
        <header>
            <nav>
                <h1>LOGO</h1>
                <div className="flex-items-center">
                    <div className="flex-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-600" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                        <input className="ml-2 outline-none bg-transparent font-" type="text" placeholder="Search..."/>
                    </div>
                    <ul className="flex items-center space-x-6">
                        <li className="font-semibold">HOME</li>
                        <li className="font-semibold">SHOP</li>
                        <li className="font-semibold">CONTACT</li>
                        <li>[CART ICON]</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;