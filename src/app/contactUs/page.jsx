'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import star from '../tools-img/home/star-about.png'
import Navbar from "../components/navbar";
import '../styles/contactUs.css'

export default function ContactUs () {
    const [ price, setPrice ] = useState(0)
    const updatePrice = (e) => {
        setPrice(e.target.value)
    }
    return (
    <>
    <Navbar />
       <div className="generalContainer">
        <div className="contactContainer">
            <div className="contact_left_container">
                <p className="subtitle"> 04 - SERVICES</p>
                <div className="contact_left_text">
                    <h1>Selected</h1>
                    <h1 className="text_color">Work studio</h1>
                    <p>A curated collection of websites, brand identities, and digital experiences — built with intention from concept to final pixel.</p>
                </div>
                <div className="contact_info">
                    <div className="contact_item">
                        <Image src={star} alt="testImg" />
                        <div className="contact_text_item">
                            <p>Phone:</p>
                            <h3>+1 (234) 567 890</h3>
                        </div>
                    </div>

                    <div className="contact_item">
                        <Image src={star} alt="testImg" />
                        <div className="contact_text_item">
                            <p>Phone:</p>
                            <h3>+1 (234) 567 890</h3>
                        </div>
                    </div>

                    <div className="contact_item">
                        <Image src={star} alt="testImg" />
                        <div className="contact_text_item">
                            <p>Phone:</p>
                            <h3>+1 (234) 567 890</h3>
                        </div>
                    </div>

                    <div className="contact_item">
                        <Image src={star} alt="testImg" />
                        <div className="contact_text_item">
                            <p>Phone:</p>
                            <h3>+1 (234) 567 890</h3>
                        </div>
                    </div>
                </div>
                <div className="info_aviability"> Aviable for new projects </div>
            </div>

            <div className="contact_right_container">
                <p>New Project Inquiry</p>
                <h1>Tell us about</h1>
                <h1>your <span>Projects</span></h1>
                <div className="contact_form_container">
                    <form action="/">

                        <div className="form_info_user">
                            <div className="input_item" style={{borderRight: '2px solid #525252'}}>
                                <span>YOUR NAME</span>
                                <input type="text" />
                            </div>
                            <div className="input_item">
                                <span>YOUR EMAIL</span>
                                <input type="text" />
                            </div>
                            <div className="input_item" style={{borderRight: '2px solid #525252'}}>
                                <span>COMPANY / BRAND (Optional)</span>
                                <input type="text" />
                            </div>
                            <div className="input_item">
                                <span>PHONE NUMBER</span>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="form_type_user">
                            <div className="type">WEB DESIGN</div>
                            <div className="type">UI/UX</div>
                            <div className="type">BRANDING</div>
                            <div className="type">E-COMMERCE</div>
                            <div className="type">SEO</div>
                            <div className="type">MAINTENANCE</div>
                        </div>

                        <div className="form_budgetRange_user">
                            <div className="top_info_range">
                                <p>BUDGET RANGE</p>
                                <div className="budget_info_total"> {price >= 9990 ? '+10k' : `$${price}`} </div>
                            </div>
                            <input type="range" min={500} max={9999} step={10} onChange={updatePrice}/>
                            <div className="info_range_prices">
                                <span>$500</span>
                                <span>$3600</span>
                                <span>$6700</span>
                                <span>$10k+</span>
                            </div>
                        </div>
                        <div className="info_textarea_container">
                            <span>PROJECT DESCRIPTION</span>
                            <textarea name="description" id="textAreaContainer" placeholder="Tell us about your project"></textarea>
                        </div>
                        <div className="info_send_button">
                            <button>Send information</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       </div> 
    </>
    )
}