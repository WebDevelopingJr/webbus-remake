'use client';
import React, { useEffect, useRef, useState } from "react";
import BckBox from "../components/tools/bckg-box-color";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import '../styles/services.css'


export default function Services() { 
    const [ sizeWidth, setSizeWidth ] = useState({widthScreen: 0, heightScreen: 0})
    const mainSize = useRef(null)
    useEffect(()=> {
        if(mainSize.current) {
            setSizeWidth({widthScreen: mainSize.current.offsetWidth, heightScreen: mainSize.current.offsetHeight})
        }
    }, [])
    return (
        <>
        <Navbar />
        <main ref={mainSize} className="mainServices">
        {sizeWidth.widthScreen > 0 && sizeWidth.heightScreen > 0 && (
            <BckBox divWidth={sizeWidth?.widthScreen} divHeight={sizeWidth?.heightScreen} />
        )}
            <div className="textContainer">
              <span>02 - SERVICES</span>
              <h1>Creative</h1>
              <h1>Digital</h1>
              <h1>Solutions</h1>
              <p>High-quality web design built for speed, performance, and results.</p>
            </div>
        </main>
        <div className="servicesContainer">

            <div className="serviceItem">
                <div className="service_number"><span>01</span></div>
                <div className="service_info">
                    <p className="info_top_text"> WEB DESIGN & DEVELOPMENT </p>
                    <h1>Web design</h1>
                    <p className="info_text_paragraph">We design and build modern, performant websites from scratch — fully responsive, fast-loading, and tailored to your brand and goals.</p>
                    <div className="info_characteristics">
                        <p>Custom design — no templates</p>
                        <p>Mobile-first & fully responsive</p>
                        <p>CMS integration (Sanity, Contentful)</p>
                        <p>Next.js / React performance builds</p>
                    </div>
                    <div className="info_separation"></div>
                    <div className="info_price">
                        <p>Starting from</p>
                        <h3>$1200</h3>
                    </div>
                </div>
                    <div className="service_icon">
                      <div className="mini_browser">
                        <div className="mini_nav">
                          <span className="dot"></span>
                          <div className="nav_bar"></div>
                          <div className="nav_links">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>

                        <div className="mini_banner">
                          <div className="banner_line"></div>
                          <div className="banner_btn"></div>
                        </div>

                        <div className="mini_cards">
                          <div className="card">
                            <div className="card_img"></div>
                            <div className="card_line"></div>
                          </div>
                          <div className="card">
                            <div className="card_img green"></div>
                            <div className="card_line"></div>
                          </div>
                          <div className="card">
                            <div className="card_img red"></div>
                            <div className="card_line"></div>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>

            <div className="serviceItem">
                <div className="service_number"><span>02</span></div>
                <div className="service_info">
                    <p className="info_top_text"> WEB DESIGN & DEVELOPMENT </p>
                    <h1>Web design</h1>
                    <p className="info_text_paragraph">We design and build modern, performant websites from scratch — fully responsive, fast-loading, and tailored to your brand and goals.</p>
                    <div className="info_characteristics">
                        <p>Custom design — no templates</p>
                        <p>Mobile-first & fully responsive</p>
                        <p>CMS integration (Sanity, Contentful)</p>
                        <p>Next.js / React performance builds</p>
                    </div>
                    <div className="info_separation"></div>
                    <div className="info_price">
                        <p>Starting from</p>
                        <h3>$1200</h3>
                    </div>
                </div>
                <div className="service_icon service_icon_design">
                  <div className="mini_branding">

                    <div className="logo_preview">
                      <div className="logo_symbol"></div>
                      <div className="logo_text"></div>
                    </div>

                    <div className="color_palette">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="logo_variations">
                      <div className="variation small"></div>
                      <div className="variation"></div>
                      <div className="variation"></div>
                    </div>

                  </div>
                </div>
            </div>

            <div className="serviceItem">
                <div className="service_number"><span>01</span></div>
                <div className="service_info">
                    <p className="info_top_text"> WEB DESIGN & DEVELOPMENT </p>
                    <h1>Web design</h1>
                    <p className="info_text_paragraph">We design and build modern, performant websites from scratch — fully responsive, fast-loading, and tailored to your brand and goals.</p>
                    <div className="info_characteristics">
                        <p>Custom design — no templates</p>
                        <p>Mobile-first & fully responsive</p>
                        <p>CMS integration (Sanity, Contentful)</p>
                        <p>Next.js / React performance builds</p>
                    </div>
                    <div className="info_separation"></div>
                    <div className="info_price">
                        <p>Starting from</p>
                        <h3>$1200</h3>
                    </div>
                </div>
                    <div className="service_icon service_icon_branding">
                      <div className="mini_browser">
                        <div className="mini_nav">
                          <span className="dot"></span>
                          <div className="nav_bar"></div>
                          <div className="nav_links">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                        
                        <div className="mini_banner">
                          <div className="banner_line"></div>
                          <div className="banner_btn"></div>
                        </div>
                        
                        <div className="mini_cards">
                          <div className="card">
                            <div className="card_img"></div>
                            <div className="card_line"></div>
                          </div>
                          <div className="card">
                            <div className="card_img green"></div>
                            <div className="card_line"></div>
                          </div>
                          <div className="card">
                            <div className="card_img red"></div>
                            <div className="card_line"></div>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>

            <div className="serviceItem">
                <div className="service_number"><span>01</span></div>
                <div className="service_info">
                    <p className="info_top_text"> WEB DESIGN & DEVELOPMENT </p>
                    <h1>Web design</h1>
                    <p className="info_text_paragraph">We design and build modern, performant websites from scratch — fully responsive, fast-loading, and tailored to your brand and goals.</p>
                    <div className="info_characteristics">
                        <p>Custom design — no templates</p>
                        <p>Mobile-first & fully responsive</p>
                        <p>CMS integration (Sanity, Contentful)</p>
                        <p>Next.js / React performance builds</p>
                    </div>
                    <div className="info_separation"></div>
                    <div className="info_price">
                        <p>Starting from</p>
                        <h3>$1200</h3>
                    </div>
                </div>
                    <div className="service_icon">
                      <div className="mini_browser">
                        <div className="mini_nav">
                          <span className="dot"></span>
                          <div className="nav_bar"></div>
                          <div className="nav_links">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                        
                        <div className="mini_banner">
                          <div className="banner_line"></div>
                          <div className="banner_btn"></div>
                        </div>
                        
                        <div className="mini_cards">
                          <div className="card">
                            <div className="card_img"></div>
                            <div className="card_line"></div>
                          </div>
                          <div className="card">
                            <div className="card_img green"></div>
                            <div className="card_line"></div>
                          </div>
                          <div className="card">
                            <div className="card_img red"></div>
                            <div className="card_line"></div>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>

            <div className="serviceItem">
                <div className="service_number"><span>01</span></div>
                <div className="service_info">
                    <p className="info_top_text"> WEB DESIGN & DEVELOPMENT </p>
                    <h1>Web design</h1>
                    <p className="info_text_paragraph">We design and build modern, performant websites from scratch — fully responsive, fast-loading, and tailored to your brand and goals.</p>
                    <div className="info_characteristics">
                        <p>Custom design — no templates</p>
                        <p>Mobile-first & fully responsive</p>
                        <p>CMS integration (Sanity, Contentful)</p>
                        <p>Next.js / React performance builds</p>
                    </div>
                    <div className="info_separation"></div>
                    <div className="info_price">
                        <p>Starting from</p>
                        <h3>$1200</h3>
                    </div>
                </div>
                    <div className="service_icon">
                      <div className="mini_browser">
                        <div className="mini_nav">
                          <span className="dot"></span>
                          <div className="nav_bar"></div>
                          <div className="nav_links">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                        
                        <div className="mini_banner">
                          <div className="banner_line"></div>
                          <div className="banner_btn"></div>
                        </div>
                        
                        <div className="mini_cards">
                          <div className="card">
                            <div className="card_img"></div>
                            <div className="card_line"></div>
                          </div>
                          <div className="card">
                            <div className="card_img green"></div>
                            <div className="card_line"></div>
                          </div>
                          <div className="card">
                            <div className="card_img red"></div>
                            <div className="card_line"></div>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
        </div>

        <Footer />
        </>
    )
}