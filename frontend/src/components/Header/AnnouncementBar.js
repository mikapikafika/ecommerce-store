import React from "react";
import Marquee from "react-fast-marquee";

function AnnouncementBar() {
    return (
        <section id="announcement-bar">
            <Marquee className="bg-black py-3 font-sans text-zinc-100 text-xl uppercase" autoFill={true} pauseOnHover={true} speed={60}>
                <p className="ml-8">Free shipping on orders over $50</p>
                <p className="ml-8">New arrivals every week</p>
            </Marquee>
        </section>
    )
}

export default AnnouncementBar;