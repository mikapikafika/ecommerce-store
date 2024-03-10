import React from "react";

function HomepageSection({header, text}) {
    return (
        <section className="flex flex-col items-center justify-center border border-t-black h-96 bg-white font-sans">
            <div className="uppercase w-3/4">
                <h2 className="text-5xl">{header}</h2>
                <p className="text-justify">{text}</p>
            </div>
            <div className="divide-x-4 divide-black"/>
        </section>
    )
}

export default HomepageSection;