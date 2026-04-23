'use client';
import React from "react";
import { useState, useRef, useEffect } from "react";
import BckBox from "../components/tools/bckg-box-color";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";

import Footer from "../components/footer";

import '../styles/aboutus.css'
const AboutUs = () => {
    const [ sizeWidth, setSizeWidth ] = useState({widthScreen: 0, heightScreen: 0})
    const mainSize = useRef(null)
    useEffect(()=> {
        if(mainSize.current) {
            setSizeWidth({widthScreen: mainSize.current.offsetWidth, heightScreen: mainSize.current.offsetHeight})
        }
    }, [])

        useEffect(() => {
        const lenis = new Lenis({
          duration: 3, // 🔥 controla qué tan lento
          smooth: true,
        });
    
        function raf(time) {  
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
    
        requestAnimationFrame(raf);
    
        return () => {
          lenis.destroy();
        };
      }, []);
  useEffect(() => {
  AOS.init();
}, []);
    return ( 
    <>
       <main ref={mainSize} className="mainServices">
       {sizeWidth.widthScreen > 0 && sizeWidth.heightScreen > 0 && (
           <BckBox divWidth={sizeWidth?.widthScreen} divHeight={sizeWidth?.heightScreen} />
       )}
           <div className="textContainer">
             <span>02 - ABOUT US</span>
             <h1>We create</h1>
             <h1>Ideas</h1>
             <h1>Into reality</h1>
             <p>High-quality web design built for speed, performance, and results.</p>
           </div>
       </main>

       <div className="peoplePresentation">
        <div className="people_presentation">
            <h1>The people behind the <span className="people_presentation_highlighted">Work</span></h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, perferendis saepe sed facere corporis culpa dolores</p>
        </div>
        <div className="people_infoContainer">

            <div className="people_container" data-aos="fade-right">
                <span className="boldRed">FOUNDER - WEB MASTER</span>
                <h2>Nestor Castillo</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis blanditiis inventore! A enim nobis perferendis harum? Illo possimus doloremque ipsum molestias repellat at exercitationem hic, nesciunt culpa quasi autem?</p>
                <div className="people_container_tools">
                    <div className="tools">Adobe</div>
                    <div className="tools">Adobe</div>
                    <div className="tools">Adobe</div>
                </div>
            </div>

            <div className="people_container" data-aos="zoom-out-up">
                <span className="boldRed" style={{color: '#69FF4B'}}>FOUNDER - WEB MASTER</span>
                <h2>Nestor Castillo</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis blanditiis inventore! A enim nobis perferendis harum? Illo possimus doloremque ipsum molestias repellat at exercitationem hic, nesciunt culpa quasi autem?</p>
                <div className="people_container_tools">
                    <div className="tools">Adobe</div>
                    <div className="tools">Adobe</div>
                    <div className="tools">Adobe</div>
                </div>
            </div>

            <div className="people_container" data-aos="fade-left">
                <span className="boldRed">FOUNDER - WEB MASTER</span>
                <h2>Nestor Castillo</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis blanditiis inventore! A enim nobis perferendis harum? Illo possimus doloremque ipsum molestias repellat at exercitationem hic, nesciunt culpa quasi autem?</p>
                <div className="people_container_tools">
                    <div className="tools">Adobe</div>
                    <div className="tools">Adobe</div>
                    <div className="tools">Adobe</div>
                </div>
            </div>

        </div>
       </div>
       {/* Create inf banner */}
       <div className="infBanner">
            <div className="inf_group" >
                <div className="inf_elements">Web Design</div>
                <div className="inf_elements">UI/UX</div>
                <div className="inf_elements">Branding</div>
                <div className="inf_elements">Maintenance</div>
                <div className="inf_elements">SEO</div>
                <div className="inf_elements">E-COMMERCE</div>
            </div>
            <div aria-hidden className="inf_group">
                <div className="inf_elements">Web Design</div>
                <div className="inf_elements">UI/UX</div>
                <div className="inf_elements">Branding</div>
                <div className="inf_elements">Maintenance</div>
                <div className="inf_elements">SEO</div>
                <div className="inf_elements">E-COMMERCE</div>
            </div>

       </div>
       {/* what we do banner */}
       <div className="weDo_general_container">
        <div className="weDo_container">
           <div className="weDo_info_container">
               <h1>Four things <br /> we always compromise</h1>
               <div className="weDo_info_pContainer">
                <div className="weDo_division"></div>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eveniet cum, necessitatibus expedita voluptates odio, voluptas rem nesciunt voluptatibus asperiores ad qui dolorem culpa. Repellendus saepe reprehenderit laudantium asperiores quae.</p>
               </div>
           </div>
           <div className="weDo_boxes_container">

                <div className="boxes_container" data-aos="fade-left" data-aos-delay="300">
                    <div className="number"><span>01</span></div>
                    <div className="boxes_text_container">
                        <span className="mini_preTitle">Design</span>
                        <h2>Design is never decoration</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aspernatur rem perspiciatis esse possimus cumque exercitationem voluptatibus, at est eaque explicabo illum iusto voluptas debitis ipsa voluptatem. Ipsa, itaque recusandae!</p>
                    </div>
                </div>
                
                <div className="boxes_container box_green" data-aos="fade-right" data-aos-delay="300">
                    <div className="number"><span>02</span></div>
                    <div className="boxes_text_container">
                        <span className="mini_preTitle">Design</span>
                        <h2>Design is never decoration</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aspernatur rem perspiciatis esse possimus cumque exercitationem voluptatibus, at est eaque explicabo illum iusto voluptas debitis ipsa voluptatem. Ipsa, itaque recusandae!</p>
                    </div>
                </div>

                <div className="boxes_container box_cyan" data-aos="fade-left" data-aos-delay="300">
                    <div className="number"><span>03</span></div>
                    <div className="boxes_text_container">
                        <span className="mini_preTitle">Design</span>
                        <h2>Design is never decoration</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aspernatur rem perspiciatis esse possimus cumque exercitationem voluptatibus, at est eaque explicabo illum iusto voluptas debitis ipsa voluptatem. Ipsa, itaque recusandae!</p>
                    </div>
                </div>

                <div className="boxes_container box_yellow" data-aos="fade-right" data-aos-delay="300">
                    <div className="number"><span>04</span></div>
                    <div className="boxes_text_container">  
                        <span className="mini_preTitle">Design</span>
                        <h2>Design is never decoration</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aspernatur rem perspiciatis esse possimus cumque exercitationem voluptatibus, at est eaque explicabo illum iusto voluptas debitis ipsa voluptatem. Ipsa, itaque recusandae!</p>
                    </div>
                </div>
           </div>
        </div>
       </div>
       <Footer />
    </>
    )
}

export default AboutUs