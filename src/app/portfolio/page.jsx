'use client'
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from '../components/navbar'
import BckBox from '../components/tools/bckg-box-color'

/* --------------------------------- images --------------------------------- */

import websiteCover from '../tools-img/portfolio/website-cover.png'
import designCover from '../tools-img/portfolio/design-cover.png'
import landingCover from '../tools-img/portfolio/landing-cover.png'

/* ----------------------------- images projects ---------------------------- */
import mcgpWebsite from '../tools-img/portfolio/mcgpImg.png'

import Footer from "../components/footer";
import '../styles/portfolio.css'

export default function Portfolio() {
  const [userSize, setUseSize] = useState({width: 0, height: 0})
  const mainBox = useRef(null)
  useEffect(()=> {
    if(mainBox.current) {
      setUseSize({width: mainBox.current.offsetWidth, height: mainBox.current.offsetHeight})
    }
  },[])

  const [designsActive, setDesignsActive] = useState(new Set('all'))

  const filterDesigns = (selected) => {
    setDesignsActive(el => {
      const newDesign = new Set()
      newDesign.add(selected)
      return newDesign
    })
  }
  useEffect(()=> {
    filterDesigns('all')
  }, [])
  return (
    <>
    <Header />
      <main id="mainServices" ref={mainBox}>
        {userSize.width > 0 && userSize.height > 0 && (
          <BckBox divWidth={userSize?.width} divHeight={userSize?.height} />
        )}
        <div className="textContainer">
          <span>03 - PORTFOLIO</span>
          <h1>Selected</h1>
          <h1>Work</h1>
          <h1>Studio</h1>
          <p>A curated collection of websites, brand identities, and digital experiences — built with intention from concept to final pixel.</p>
          <div className="itemsServices">
            <div className="servItems">Web Design</div>
            <div className="servItems">Brand Logos</div>
            <div className="servItems">UI/UX</div>
            <div className="servItems">Branding</div>
            <div className="servItems">50+ Projects</div>
          </div>
        </div>
      </main>

      {/* -------------------------------- Projects -------------------------------- */}
      
      <section className="projects">
        <div className="projectContainer">
          <div className="buttonsProjects">
            <div className={`buttonsP ${designsActive.has('all') ? 'buttonsPActive' : ''}`} onClick={()=> filterDesigns('all')}>All</div>
            <div className={`buttonsP ${designsActive.has('web-design') ? 'buttonsPActive' : ''}`} onClick={()=> filterDesigns('web-design')}>Web Design</div>
            <div className={`buttonsP ${designsActive.has('brand-logos') ? 'buttonsPActive' : ''}`} onClick={()=> filterDesigns('brand-logos')}>Brand Logos</div>
            <div className={`buttonsP ${designsActive.has('ui-ux') ? 'buttonsPActive' : ''}`} onClick={()=> filterDesigns('ui-ux')}>UI/UX</div>
            <div className={`buttonsP ${designsActive.has('branding') ? 'buttonsPActive' : ''}`} onClick={()=> filterDesigns('branding')}>Branding</div>
          </div>

        <div className="containerPortfolio">

          <div className="portfolio_items" style={{display: `${designsActive.has('web-design') || designsActive.has('all') ? 'block': 'none'}`}}>
            <div className="image">
              <Image className="front_image" src={websiteCover} alt="website-cover" />
              <Image className="client_image" src={mcgpWebsite} alt="miamiPediatric"/>
            </div>
            <div className="text_portfolio_container">
              <h1>Webbus Marketing LLC</h1>
              <p>A curated collection of websites, brand identities, and digital experiences — built with intention from concept to final pixel.</p>
              <div className="tax_portfolio">
                <div className="web_design_tax">Web Design</div>
                <div className="graphic_design_tax">Graphic Design</div>
              </div>
            </div>
          </div>
          
          <div className="portfolio_items" style={{display: `${designsActive.has('brand-logos') || designsActive.has('all') ? 'block': 'none'}`}}>
            <div className="image">
              <Image className="front_image" src={designCover} alt="website-cover" />
              <Image className="client_image" src={mcgpWebsite} alt="miamiPediatric"/>
            </div>
            <div className="text_portfolio_container">
              <h1>Webbus (brand logos)</h1>
              <p>A curated collection of websites, brand identities, and digital experiences — built with intention from concept to final pixel.</p>
              <div className="tax_portfolio">
                <div className="web_design_tax">Web Design</div>
                <div className="graphic_design_tax">Graphic Design</div>
              </div>
            </div>
          </div>

          <div className="portfolio_items" style={{display: `${designsActive.has('ui-ux') || designsActive.has('all') ? 'block': 'none'}`}}>
            <div className="image">
              <Image className="front_image" src={landingCover} alt="website-cover" />
              <Image className="client_image" src={mcgpWebsite} alt="miamiPediatric"/>
            </div>
            <div className="text_portfolio_container">
              <h1>Webbus (ui-ux)</h1>
              <p>A curated collection of websites, brand identities, and digital experiences — built with intention from concept to final pixel.</p>
              <div className="tax_portfolio">
                <div className="web_design_tax">Web Design</div>
                <div className="graphic_design_tax">Graphic Design</div>
              </div>
            </div>
          </div>

          <div className="portfolio_items" style={{display: `${designsActive.has('branding') || designsActive.has('all') ? 'block': 'none'}`}}>
            <div className="image">
              <Image className="front_image" src={designCover} alt="website-cover" />
              <Image className="client_image" src={mcgpWebsite} alt="miamiPediatric"/>
            </div>
            <div className="text_portfolio_container">
              <h1>Webbus (Branding)</h1>
              <p>A curated collection of websites, brand identities, and digital experiences — built with intention from concept to final pixel.</p>
              <div className="tax_portfolio">
                <div className="web_design_tax">Web Design</div>
                <div className="graphic_design_tax">Graphic Design</div>
              </div>
            </div>
          </div>

          <div className="portfolio_items" style={{display: `${designsActive.has('web-design') || designsActive.has('all') ? 'block': 'none'}`}}>
            <div className="image">
              <Image className="front_image" src={landingCover} alt="website-cover" />
              <Image className="client_image" src={mcgpWebsite} alt="miamiPediatric"/>
            </div>
            <div className="text_portfolio_container">
              <h1>Webbus (web design)</h1>
              <p>A curated collection of websites, brand identities, and digital experiences — built with intention from concept to final pixel.</p>
              <div className="tax_portfolio">
                <div className="web_design_tax">Web Design</div>
                <div className="graphic_design_tax">Graphic Design</div>
              </div>
            </div>
          </div>

          <div className="portfolio_items" style={{display: `${designsActive.has('brand-logos') || designsActive.has('all') ? 'block': 'none'}`}}>
            <div className="image">
              <Image className="front_image" src={websiteCover} alt="website-cover" />
              <Image className="client_image" src={mcgpWebsite} alt="miamiPediatric"/>
            </div>
            <div className="text_portfolio_container">
              <h1>Webbus (brand logos)</h1>
              <p>A curated collection of websites, brand identities, and digital experiences — built with intention from concept to final pixel.</p>
              <div className="tax_portfolio">
                <div className="web_design_tax">Web Design</div>
                <div className="graphic_design_tax">Graphic Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <Footer />
    </>
  );
}