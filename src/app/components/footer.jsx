import React from "react";
import '../styles/footer.css'
/* ---------------------------------- icons --------------------------------- */
import html from '../tools-img/home/html-5-svgrepo-com.svg'
import css from "../tools-img/home/css-vector.svg";
import js from "../tools-img/home/js-vector.svg";
import react from "../tools-img/home/react-vecto.svg";
import nextjs from "../tools-img/home/nextjs-fill-svgrepo-com.svg";
import figma from "../tools-img/home/figma-vect.svg";
import adobeL from "../tools-img/home/adobeIl-vector.svg";
import adobeH from "../tools-img/home/adobePh-vector.svg";

import ig from '../tools-img/home/ig-icon.svg'

import Image from "next/image";
import Link from "next/link";
export default function Footer() {

    const allIcons = [
      {name: 'HTML5', link: html},
      {name: 'CSS3', link: css},
      {name: 'Javascript', link: js},
      {name: 'React', link: react},
      {name: 'NextJS', link: nextjs},
      {name: 'Figma', link: figma},
      {name: 'Illustrator', link: adobeL},
      {name: 'Photoshop', link: adobeH},
    ]
    

    return (
        <>
        <section className='banner'>
          <div className='bannerContainer'>
            <div className='banner_container'>
              <div className='paragrah_container'>
                <h1>Let's build</h1>
                <h1>something</h1>
                <h1 className='coloredText'>remarkable</h1>
              </div>
              <div className='banner_rest'>
                <p>You have the idea. We have the craft. Let's turn it into a website that actually works — and looks unforgettable.</p>
                <div className='banner_buttons'>
                  <Link href='/services'>View all services</Link>
                  <Link href='/contactUs'>Book a call</Link>
                </div>
              </div>
              <div className='banner_icons'>
                {allIcons.map((el) => {
                  return (
                    <div key={el.name} className='banner_icons_inside'>
                      <Image src={el.link} alt={el.name} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
      </section> 

      {/* -------------------------------------------------------------------------- */
      /*                                   Footer                                   */
      /* -------------------------------------------------------------------------- */}
      <footer className='footer'>
        <div className='footer_top'>
          <div className='footer_top_leftText'>
            <h1>Webbus Marketing</h1>
            <p>You have the idea. We have the craft. Let's turn it into a website that actually works — and looks unforgettable.</p>
            <div className='footer_top_leftText_aviability'><span></span> Aviable for new projects</div>
          </div>
          <div className='footer_top_rightText'>
            <div className='footer_top_info_container'>
              <p>Navigation</p>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/contactUs">Contact</Link>
            </div>

            <div className='footer_top_info_container'>
              <p>Services</p>
              <Link href="/services">Web Design</Link>
              <Link href="/services">Development</Link>
              <Link href="/services">Branding</Link>
              <Link href="/services">SEO & growth</Link>
            </div>

            <div className='footer_top_info_container contact_info_links'>
              <p>Contact</p>
              <Link href="#">info@webbus.com</Link>
              <Link href="#">+1 (555) 000-000</Link>
              <Link href="#">Miami, FL</Link>
            </div>

          </div>
        </div>
        <div className='footer_bottom'>
          <p>Copyright © Webbus Marketing LLC 1998 - 2026</p>
          <div className='footer_botom_icons'>
            <Link href='#'><Image src={ig} alt="ache" width={30} height={30}/></Link>
            <Link href='#'><Image src={ig} alt="ache" width={30} height={30}/></Link>
            <Link href='#'><Image src={ig} alt="ache" width={30} height={30}/></Link>
          </div>
        </div>
      </footer>
        </>
    )
}