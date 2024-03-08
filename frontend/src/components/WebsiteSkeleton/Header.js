import React from "react";
import Navbar from "../Header/Navbar";
import './Header.css';
import AnnouncementBar from "../Header/AnnouncementBar";

function Header() {
    return (
        <header className="font-sans">
            <AnnouncementBar/>
            <Navbar/>
        </header>
    )
}

export default Header;