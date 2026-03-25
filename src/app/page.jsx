'use client';
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Image from "next/image";
import Link from "next/link";
import CountUp from 'react-countup';
import useMousePosition from './components/functions/useMousePosition'
import Footer from "./components/footer";
/* ---------------------------------- logos --------------------------------- */
import html from './tools-img/home/html-5-svgrepo-com.svg'
import css from "./tools-img/home/css-vector.svg";
import js from "./tools-img/home/js-vector.svg";
import react from "./tools-img/home/react-vecto.svg";
import nextjs from "./tools-img/home/nextjs-fill-svgrepo-com.svg";
import figma from "./tools-img/home/figma-vect.svg";
import adobeL from "./tools-img/home/adobeIl-vector.svg";
import adobeH from "./tools-img/home/adobePh-vector.svg";

import arrow from './tools-img/home/arrowsvg.svg'
import star from './tools-img/home/star-about.png'
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const mousePosition = useMousePosition()

  const [particles, setParticles] = useState([]);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });


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

  const ring = useRef(null)
  const dot = useRef(null)
  let size = 30

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    const colors = ['#ce5f5f', '#1f16d4', '#c2d716']
    setWindowSize({ width, height });

    const tempParticles = Array.from({ length: 20 }).map(() => ({
      width: Math.random() * (8 - 1) + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      top: Math.random() * height,
      left: Math.random() * width,
      delay: Math.random() * 5,      // in seconds
      duration: 5 + Math.random() * 5, // 5-10s
    }));
    setParticles(tempParticles);

    /* --------------------- set the styles of ring & point --------------------- */

document.querySelectorAll('a,button').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    ring.current.style.width = '40px'
    ring.current.style.height = '40px'
    dot.current.style.boxShadow = '0px 0px 8px 4px #ed4242'
    size = ring.current.offsetWidth;
  })
  el.addEventListener('mouseleave', ()=> {
    ring.current.style.width = '30px'
    ring.current.style.height = '30px'
    dot.current.style.boxShadow = 'none'
    size = 30;
  })
})
  }, []);


  /* -------------------------------------------------------------------------- */
  /*                                aboutUs code                                */
  /* -------------------------------------------------------------------------- */

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div ref={ring} className={styles.cursor} style={{top: `${mousePosition.y - size/2}px`, left: `${mousePosition.x - size/2}px`}}>
          <div ref={dot} className={styles.point} style={{top: `${mousePosition.y}px`, left: `${mousePosition.x}px`}}></div>
        </div>
        <div id={styles.redLines}>
          <div className={styles.lineRed}></div>
          <div className={styles.lineRed}></div>
          <div className={styles.lineRed}></div>
          <div className={styles.lineRed}></div>
          <div className={styles.lineRed}></div>
          <div className={styles.lineRed}></div>
        </div>
        <div className={styles.particles}>
          {
            particles.map((el, i) => {
            return (
            <div key={i} className={styles.particc} style={
              {
              width: `${el.width}px`,
              height: `${el.width}px`,
              top: `${el.top}px`, 
              right: `${el.left}px`,
              animationDelay: `${el.delay}s`,
              animationDuration: `${el.duration}s`}}>  
            </div>
            )})
          }
        </div>
        <div className={styles.icons}>
          {
            allIcons.map((el, inx) => {
              return (
                <div key={inx} className={`${styles.iconI} ${styles[el.name]}`}>
                  <Image src={el.link} alt={el.name}/>
                  <p>{el.name}</p>
                </div>
              )
            })
          }
        </div>
        <div className={styles.textInfo}>
          <div className={styles.title}>
            <h1>We create</h1>
            <h1 className={styles.textColored}>digital experiences</h1>
            <h1>that convert</h1>
              <p>We design custom digital experiences for startups and brands that want to stand out.</p>
          </div>
          <div className={styles.contactInfo}>
            <Link href='#' className={styles.contact}>Services</Link>
            <Link href='#'>Contact</Link>
          </div>
        </div>
        <div className={styles.division}>
          <p>build with</p>
          <span></span>
          <div className={styles.divisionI}>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JAVASCRIPT</span>
            <span>REACT</span>
          </div>
        </div>
      </main>

      {/* -------------------------------------------------------------------------- */
      /*                              Aboutus section                              */
      /* -------------------------------------------------------------------------- */}
      <section className='aboutUs'>
        <div className={styles.about}>
          <div className={styles.generalTitle}>
            <div className={styles.sectionDiv}>
              <span></span>
              ABOUT US
            </div>
            <h1>Our Team</h1>
            <h2>Driven by ambition</h2>
          </div>
          
          <div className={styles.infoAboutContainer}>
            {/* First table */}
              <div className={styles.infoStory}>
                <p className={styles.info_text}>OUR STORY</p>
                <div className={styles.graphMap}>
                  <div className={styles.browser_nav}>
                    <div className={styles.browser_nav_points}></div>
                    <div className={styles.browser_nav_points}></div>
                    <div className={styles.browser_nav_points}></div>
                      <div className={styles.browser_nav_search}>
                    </div>
                  </div>
                  <div className={styles.browser_div}>
                    <div className={styles.browser_containers}></div>
                    <div className={styles.browser_containers}></div>
                    <div className={styles.browser_containers}></div>
                  </div>
                </div>
                <h1>Passionate builders since 1998</h1>
                <p className={styles.descriptions}>We started as a two-person studio with one goal: make the web feel better. Today we ship fast, design with intention, and never cut corners — because the details are the product.</p>
                <div className={styles.totalProjects}>
                  <div className={styles.totalProjectsItem}><CountUp start={0} end={20} duration={3} useEasing={true} prefix="+"  />PROJECTS</div>
                  <div className={styles.totalProjectsItem}><CountUp start={0} end={80} duration={3} useEasing={true} prefix="+" />PROJECTS</div>
                  <div className={styles.totalProjectsItem}><CountUp start={0} end={270} duration={3} useEasing={true} prefix="+"  />PROJECTS</div>
                </div>
              </div>

              <div className={styles.infoAboutContainer2}>
                {/* Second table */}
                <div className={styles.ourValues}>
                  <p className={styles.info_text}>WHAT WE STAND FOR</p>
                  <h1>Our values</h1>
                  <div className={styles.tableInfoValues}>
                    <div className={styles.valuesItem}>
                      <span><Image src={star} alt="star"/></span>
                      <div className={styles.valueItemsText}>
                        <h3>Modern & international designs</h3>
                        <p>Every layout, color, and typeface has a reason to exist.</p>
                      </div>
                    </div>

                    <div className={styles.valuesItem}>
                      <span><Image src={star} alt="star"/></span>
                      <div className={styles.valueItemsText}>
                        <h3>User-focused experiences</h3>
                        <p>We design with the user in mind to create intuitive and engaging interfaces.</p>
                      </div>
                    </div>

                    <div className={styles.valuesItem}>
                      <span><Image src={star} alt="star"/></span>
                      <div className={styles.valueItemsText}>
                        <h3>Attention to every detail</h3>
                        <p>From spacing to typography, every element contributes to the final experience.</p>
                      </div>
                    </div>

                    <div className={styles.valuesItem}>
                      <span><Image src={star} alt="star"/></span>
                      <div className={styles.valueItemsText}>
                        <h3>Creative and strategic thinking</h3>
                        <p>Design decisions are guided by both creativity and measurable goals.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Third table */}
                <div className={styles.infoProcess}>
                  <p className={styles.info_text}>CREATIVE STRATEGIES</p>
                  <h1>Our process</h1>
                    <div className={styles.processTable}>
                      <div className={styles.lineThrough}></div>
                      <div className={styles.miniProcess}>
                        <div className={styles.number}>01</div>
                        <div className={styles.processText}>
                          <h3>Discovery call</h3>
                          <p>We learn your goals, audience, and what success looks like for you</p>
                        </div>
                      </div>

                      <div className={styles.miniProcess}>
                        <div className={styles.number}>02</div>
                        <div className={styles.processText}>
                          <h3>Research & planning</h3>
                          <p>We analyze your market and define the strategy to guide the design process.</p>
                        </div>
                      </div>

                      <div className={styles.miniProcess}>
                        <div className={styles.number}>03</div>
                        <div className={styles.processText}>
                          <h3>Design & development</h3>
                          <p>We craft modern interfaces and build solutions tailored to your needs.</p>
                        </div>
                      </div>

                      <div className={styles.miniProcess}>
                        <div className={styles.number}>04</div>
                        <div className={styles.processText}>
                          <h3>Launch & optimization</h3>
                          <p>We deploy the project and refine it to ensure the best performance.</p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <Link href={'#'} className={styles.aboutEndButton}>Work with us <Image src={arrow} alt="arrow" width={20} height={20}/></Link>
        </div>
      </section>
        

        {/* -------------------------------------------------------------------------- */
        /*                                Services part                               */
        /* -------------------------------------------------------------------------- */}

      <section className={styles.services}>
        <div className={styles.servicesContainer}>
          <div className={styles.generalTitle}>
            <div className={styles.sectionDiv}>
              <span></span>
              SERVICES
            </div>
            <h1>Everything you need to</h1>
            <h2>Build Faster</h2>
          </div>

          <div className={styles.infoServicesContainer}>
            {/* First division */}
            <div className={styles.bigService}>
              <p className={styles.info_text}>WHAT WE STAND FOR</p>
              <Image src={star} alt="test"/>
              <div className={styles.bigServiceInfo}>
                <h1>Web Design & Development</h1>
                <p className={styles.descriptionText}>We build modern, performant websites tailored to your brand. Every pixel is intentional, every interaction is smooth.</p>
              </div>
              <div className={styles.websiteDesign}>
                <div className={styles.website_header}>
                  <div className={styles.website_dot_container}>
                    <div className={styles.website_dot}></div>
                    <div className={styles.website_dot}></div>
                    <div className={styles.website_dot}></div>
                  </div>
                  <div className={styles.website_nav}>website.clientname.com</div>
                </div>
                <div className={styles.website_container}>
                  <div className={styles.website_bar}></div>
                  <div className={styles.website_containers_container}>
                    <div className={styles.website_inside_container}></div>
                    <div className={styles.website_inside_container}></div>
                    <div className={styles.website_inside_container}></div>
                  </div>
                </div>
              </div>
              <div className={styles.elements}>
                <div className={styles.innerElements}>HTML</div>
                <div className={styles.innerElements}>CSS</div>
                <div className={styles.innerElements}>REACT</div>
                <div className={styles.innerElements}>JAVASCRIPT</div>
                <div className={styles.innerElements}>FIGMA</div>
              </div>
              <Link href="#" >Get in touch</Link>
            </div>
            {/* Second part of the division */}
            <div className={styles.gridsServices}>
              {/* Part 1 */}
              <div className={styles.gServices}>
                <Image src={star} alt="image"/>
                <p className={styles.info_text}>PERFOMANCE</p>
                <div className={styles.gServicesText}>
                  <h1>Web Design & Development</h1>
                  <p>We build modern, performant websites tailored to your brand. Every pixel is intentional, every interaction is smooth.</p>
                </div>
              </div>
              {/* Part 2 */}
              <div className={styles.gServices}>
                <Image src={star} alt="image"/>
                <p className={styles.info_text}>PERFOMANCE</p>
                <div className={styles.gServicesText}>
                  <h1>Web Design & Development</h1>
                  <p>We build modern, performant websit es tailored to your brand. Every pixel is intentional, every interaction is smooth.</p>
                </div>
              </div>
              {/* Part 3 */}
              <div className={styles.gServices}>
                <Image src={star} alt="image"/>
                <p className={styles.info_text}>PERFOMANCE</p>
                <div className={styles.gServicesText}>
                  <h1>Web Design & Development</h1>
                  <p>We build modern, performant websites tailored to your brand. Every pixel is intentional, every interaction is smooth.</p>
                </div>
              </div>
              {/* Part 4 */}
              <div className={styles.gServices}>
                <Image src={star} alt="image"/>
                <p className={styles.info_text}>PERFOMANCE</p>
                <div className={styles.gServicesText}>
                  <h1>Web Design & Development</h1>
                  <p>We build modern, performant websites tailored to your brand. Every pixel is intentional, every interaction is smooth.</p>
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
