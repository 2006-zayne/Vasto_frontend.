import React from 'react'
import Navigationbar from './Navigationbar/Nav'
import HerroSection from './Herrosection/HerroSection'
import AboutSection from './Aboutsection/AboutSection'
import FeachersSection from './Feacherssection/FeachersSection'
import GallerySection from './Gallerysection/GallerySection'

function Landingpage() {
    return (
        <>
            <Navigationbar />
            <HerroSection />
            <AboutSection />
            <FeachersSection />
            <GallerySection />
        </>
    )
}

export default Landingpage