import React from 'react'
import Navigationbar from '../../components/Navigationbar/Nav'
import HerroSection from './Herrosection/HerroSection'
import AboutSection from './Aboutsection/AboutSection'
import FeachersSection from './Feacherssection/FeachersSection'
import GallerySection from './Gallerysection/GallerySection'
import FooterSection from '../../components/Footer/Footer'

function Landingpage() {
    return (
        <>
            <Navigationbar />
            <HerroSection />
            <AboutSection />
            <FeachersSection />
            <GallerySection />
            <FooterSection />
        </>
    )
}

export default Landingpage