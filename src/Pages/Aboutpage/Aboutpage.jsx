import React from "react";
import Navigationbar from "../../components/Navigationbar/Nav";
import AboutPageHeroSection from "./Herosection/AboutPageHeroSection";
import AboutMainPage from "./Aboutmainpage/Aboutmainpage";
import FooterSection from "../../components/Footer/Footer";

function AboutPage(){
    return(
        <>
            <Navigationbar />
            <AboutPageHeroSection />
            <AboutMainPage />
            <FooterSection />
        </>
    )
}

export default AboutPage