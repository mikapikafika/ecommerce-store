import React from "react";

function Footer() {
    return (
        <footer className="p-4 bg-black md:p-8 lg:p-10">
            <div className="mx-auto max-w-screen-xl text-center font-sans">
                <a href="#"
                   className="flex justify-center items-center text-2xl font-semibold text-zinc-100">
                    LOGO
                </a>
                <p className="my-6 text-zinc-400">description</p>
                <ul className="flex flex-wrap justify-around items-center mb-6 text-zinc-100 uppercase">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Premium</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Campaigns</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#"
                                                                                                    className="hover:underline">Michalina Wysocka™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;