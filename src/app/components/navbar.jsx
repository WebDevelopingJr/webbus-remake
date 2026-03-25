"use client";
/* Imported Next Hooks / styles*/
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from '../styles/navbar.css'
/* Images */
import webbusMiniLogo from '../tools-img/home/log-webbus001.png';


export default function Navbar() {
/* hooks & functions  */
  const [stt, setstt] = useState(false);

    useEffect(() => {

    const handleScroll = () => {
     if(stt) {
/*       console.log('yh yh') */
     }else {
/*       console.log('nah nah' + stt) */
     }
    };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [stt]);
    return (
    <>
    <nav>
        <div className="content">
            <div className={`rightLinks ${stt ? "open" : "close"}`}>
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
            </div>
            <div className={`logoCenter ${stt ? "open" : "close"}`} onClick={() => setstt(el => !el)}>
                <Image src={webbusMiniLogo} alt="Webbus Mini Logo" />
            </div>
            <div className={`leftLinks ${stt ? "open" : "close"}`}>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contactUs  ">Contact</Link>
            </div>
        </div>
    </nav>
    </>
  );
}