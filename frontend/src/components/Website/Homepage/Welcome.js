import React from "react";
import './Welcome.css';

function Welcome() {
    return (
        <div className="flex flex-col items-center justify-center h-80 bg-black font-sans">
            <p className="text-zinc-100 inline-block px-3.5 py-1 rounded-full border-2 border-zinc-100">zachecajacy tekst</p>
            <p className="text-zinc-100">to jak sie bede chciala powiesic</p>
            <p className="text-zinc-100">wiecej tekstu</p>
        </div>
    )
}

export default Welcome;