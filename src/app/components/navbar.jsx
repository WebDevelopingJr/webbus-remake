"use client";
/* Imported Next Hooks / styles*/
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, act, useRef } from "react";
import styles from '../styles/navbar.css'
/* Images */
import webbusMiniLogo from '../tools-img/home/log-webbus001.png';
import houseIcon from '../tools-img/nav/home-icon.svg'
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [activeHeader, setActiveHeader] = useState(false)
  const router = useRouter();

  const [headerP, setHeaderP] = useState('center')

  const headerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({top: 30,left: null})
  const handleMouseMove = (e) => {
    setMousePosition({top: e.clientY - 50, left: e.clientX});
    console.log(e.clientX, e.clientY)
    
  };
  const headerDown = () => {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', headerUp);
  }

  const headerUp = () => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', headerUp);
  }

    


    return (
    <>
    <div ref={headerRef} className="header" style={{top: mousePosition.top, left: mousePosition.left}} onMouseDown={headerDown} onMouseUp={headerUp}>
      <div className="header_items">
      <Image className={`${activeHeader ? 'activeImg' : ''}`} src={webbusMiniLogo} alt="WebbusBrandLogo" draggable="false" onClick={()=> setActiveHeader(el=> !el)} />

      <div className={`nav_items ${activeHeader ? 'active_items' : ''}`} onMouseDown={(e) => e.stopPropagation()}>
        <Image className="houseIcon" src={houseIcon} alt="homeImage" onClick={() => router.push('/')}/>
        <Link className="service" href="/services" onClick={()=> setActiveHeader(false)}>Services</Link>
        <Link className="aboutus" href="/aboutus" onClick={()=> setActiveHeader(false)}>About us</Link>
        <Link className="portfolio" href="/portfolio" onClick={()=> setActiveHeader(false)}>Portfolio</Link>
        <Link className="contact" href="/contactUs" onClick={()=> setActiveHeader(false)}>Contact</Link>
      </div>
      </div>
    </div>
    </>
    );
}