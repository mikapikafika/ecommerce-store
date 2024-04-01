import React from "react";

function HomepageBanner() {
    return (
        <div className="flex flex-col items-center justify-center h-128 bg-black font-sans">
            <p className="text-zinc-100 inline-block px-3.5 py-1 rounded-full border-2 border-zinc-100 uppercase">text</p>
            <p className="text-zinc-100 uppercase text-8xl text-center mt-8 mb-8">BIG ANIMATED LOGO</p>
            <p className="text-zinc-100">more text because why not</p>
        </div>
    )
}

export default HomepageBanner;