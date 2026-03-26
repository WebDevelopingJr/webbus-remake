"use client";
/* Imported Next Hooks / styles*/
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, act } from "react";
import styles from '../styles/navbar.css'
/* Images */
import webbusMiniLogo from '../tools-img/home/log-webbus001.png';
import houseIcon from '../tools-img/nav/home-icon.svg'
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [activeHeader, setActiveHeader] = useState(false)

    const router = useRouter();

    return (
    <>
    <div className="header">
      <div className="header_items">
      <Image className={`${activeHeader ? 'activeImg' : ''}`} src={webbusMiniLogo} alt="WebbusBrandLogo" onClick={()=> setActiveHeader(el=> !el)} />
      <div className={`nav_items ${activeHeader ? 'active_items' : ''}`}>
        <Image className="houseIcon" src={houseIcon} alt="homeImage" onClick={() => router.push('/')}/>
        <Link className="service" href="/services">Services</Link>
        <Link className="aboutus" href="/">About us</Link>
        <Link className="portfolio" href="/portfolio">Portfolio</Link>
        <Link className="contact" href="/contactUs">Contact</Link>
      </div>
      </div>
    </div>
    </>
    );
}