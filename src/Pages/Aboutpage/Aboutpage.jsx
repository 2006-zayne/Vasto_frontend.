import React from "react";
import Navigationbar from "../../components/Navigationbar/Nav";
import AboutPageHeroSection from "./Herosection/AboutPageHeroSection";
import AboutMainPage from "./Aboutmainpage/Aboutmainpage";

function AboutPage(){
    return(
        <>
            <Navigationbar />
            <AboutPageHeroSection />
            <AboutMainPage />
        </>
    )
}

export default AboutPage