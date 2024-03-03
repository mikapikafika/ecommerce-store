import React from "react";
import './AnnouncementBar.css';

function AnnouncementBar() {
    const textItems = [
        'FREE SHIPPING ON BUNDLES & ORDERS OVER $50',
        'FREE SHIPPING ON BUNDLES & ORDERS OVER $50',
        'FREE SHIPPING ON BUNDLES & ORDERS OVER $50',
    ]
    const textList = textItems.map((text, index) => <p className={`text-center text-zinc-100 marquee-item-${index}`}>{text}</p>);

    return (
        <section id="announcement-bar" className="marquee">
            <div className="bg-black text-zinc-100">
                <span>++++ this is a running text aka marquee using html &amp; css + text length is limited to the width</span>
                <span>++++ this is a running text aka marquee using html &amp; css + text length is limited to the width</span>
            </div>
        </section>
    )
}

export default AnnouncementBar;