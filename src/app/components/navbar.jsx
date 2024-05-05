"use client"

import Link from "next/link"
import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink";

    const links = [
        {url: "/", title: "Home"},
        {url: "/about", title: "About"},
        {url: "/portfolio", title: "Portfolio"},
        {url: "/contact", title: "Contact"},
    ];

    const Navabar = () => {
        const [open,setOpen] = useState(false)

    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px48 text-xl'>

            {/*Links*/}
            <div className='hidden md:flex gap-4 w-1/3'>
                {links.map(link=>(
                   <NavLink link={link} key={link.title}/>
                ))}
            </div>

            {/*Logo */}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1">KY</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">design</span>
                </Link>
            </div>
            {/*Social*/}
            <div className="hidden md:flex gap-4 w-1/3">
                <Link href="https://github.com/abacowsky">
                <Image src="/github.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://www.instagram.com/kydesigns_official/">
                <Image src="/instagram.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://www.facebook.com/stabbathausdesigns/photos/">
                <Image src="/facebook.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/aurora-bacowsky-a444622b7">
                <Image src="/linkedin.png" alt="" width={24} height={24} />
                </Link>
            </div>
             {/*Responsive Menu */}
            <div className='md:hidden'>
                {/*MENU BUTTON*/}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(() => setOpen((prev) => !prev))}>
                    <div className='w-10 h-1 bg-white rounded'></div>
                    <div className='w-10 h-1 bg-white rounded'></div>
                    <div className='w-10 h-1 bg-white rounded'></div>
                </button>
                {/*Menu List */}
                {open && (


                <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl '>
                {links.map(link =>(
                    <Link href={link.url} key={link.title}>{link.title}</Link>
                ))}
            </div>
            )}
        </div>
     </div> 
    )
}

export default Navabar