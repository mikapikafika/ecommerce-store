import React from "react";
import './AnnouncementBar.css';

function AnnouncementBar() {
    const tableData = [
        'FREE SHIPPING ON BUNDLES & ORDERS OVER $50',
        'FREE SHIPPING ON BUNDLES & ORDERS OVER $50',
        'FREE SHIPPING ON BUNDLES & ORDERS OVER $50',
    ]
    const spanList = tableData.map((text, index) => <span className={`text-center text-zinc-100 marquee-item-${index}`}>{text}</span>);

    return (
        <section id="announcement-bar" className="marquee">
            <div className="bg-black text-zinc-100">
                {spanList}
            </div>
        </section>
    )
}

export default AnnouncementBar;