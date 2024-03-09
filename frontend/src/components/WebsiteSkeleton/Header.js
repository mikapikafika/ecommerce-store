import React, {useState, useEffect, useRef} from "react";
import Navbar from "../Header/Navbar";
import './Header.css';
import AnnouncementBar from "../Header/AnnouncementBar";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const announcementBarRef = useRef(null);

    useEffect(() => {
        const checkScroll = () => {
            const announcementBarHeight = announcementBarRef.current ? announcementBarRef.current.offsetHeight : 0;
            setIsScrolled(window.scrollY > announcementBarHeight);
        };

        window.addEventListener('scroll', checkScroll);

        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return (
        <header className="font-sans">
            {<AnnouncementBar ref={announcementBarRef}/>}
            <Navbar className={isScrolled ? "fixed top-0 w-full" : ""}/>
        </header>
    )
}

export default Header;