import React from "react";
import { useMediaQuery } from "react-responsive";
import './AboutPageHerosection.css'

function AboutPageHeroSection(){

    function DescktopAndLaptop(){
        return(
            <section className="about-page-hero-section">
                <div className="about-page-hero-container">
                    <h1>VASTO'S</h1>
                    <h2>STORY</h2>
                    <p>scroll to learn about us</p>
                </div>
            </section>
        )
    }

    function MobileAndTablet(){
        return(
            <section className="mobile-about-page-hero-section">
                <div className="mobile-about-page-hero-container">
                    <h1>VASTO'S</h1>
                    <h2>STORY</h2>
                    <p>scroll to learn about us</p>
                </div>
            </section>
        )
    }

    const LaptopAndDesktop = useMediaQuery({query:'(min-width:1224px)'})
    const TabletAndMobile = useMediaQuery({query:'(max-width:1224px)'})
    return(
        <>
        { LaptopAndDesktop && <DescktopAndLaptop/> }
        { TabletAndMobile && <MobileAndTablet/> }
        </>
    )
}

export default AboutPageHeroSection