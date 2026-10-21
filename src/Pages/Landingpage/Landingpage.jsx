import {React, useState} from 'react'
import Navigationbar from './Navigationbar/Nav'
import HerroSection from './Herrosection/HerroSection'
import AboutSection from './Aboutsection/AboutSection'

function Landingpage() {
    return (
        <>
            <Navigationbar />
            <HerroSection/>
            <AboutSection/>
        </>
    )
}

export default Landingpage