import {React, useState, useRef} from "react";
import ImageLoder from "./ImgLoader";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import './Aboutmainpage.css'

gsap.registerPlugin(ScrollTrigger)

function DeaktopAnimationScroll(){
    const [count, setCount] = useState(0)
    const container = useRef(null)

    useGSAP(()=>{
    const counter = { count: 0 };

    gsap.to(counter, {
        count: ImageLoder.length -1,
        duration: 3,
        ease: "none",
        scrollTrigger:{
            trigger:container.current,
            start:"bottom bottom",
            end:"bottom -400%",
            markers:false,
            scrub: true,
            pin:true
        },
        onUpdate: () => {
            setCount(Math.round(counter.count))
        }
    });

    gsap.from(".scroll-about-page-img",{
        opacity:0,
        scale:0.15,
        y:200,
        scrollTrigger:{
            trigger:container.current,
            start:"top bottom",
            end:"top top",
            scrub:true,
            markers:false
        }
    })
        
    },{scope:container})

    return(
        <>
        <div className="triger-anime">
            <div ref={container} className="img-scroll-animation-container">
                {ImageLoder[count] && (
                    <img src={ImageLoder[count]} className="scroll-about-page-img" alt={`Frame ${count}`} />
                )}
            </div>
        </div>
        
        </>
    )
}

function DesktopTextScrollAnimation(){
    return(
        <>
        <div className="about-animation-text-container">
            <div className="first-About-story-container">
                <h3 className="Desktop-About-Text-Section">HOW IT STARTED</h3>
                <p>
                    Vasto was formerly known as Pwaninet. The service domain (pwaninet.app), 
                    app identifiers, and technical references may still use the previous name; 
                    they refer to the same service.
                </p>
            </div>
            <div className="second-story-container">
                <h3 className="Desktop-About-Text-Section">TECHNOLOGY STACK</h3>
                <p>
                    <span>Frameworks:</span> React js for dealing with the front end and Django for the app Api. <br /> 
                    <span>Database:</span> PostgreSQL with pgvector 0.3.6 for vector embeddings <br />
                    <span>Cache:</span> Redis (with local memory fallback)
                </p>
            </div>
        </div>
        </>
    )
}

function DeaktopAboutMainPage(){
    
    return(
        <>
        <section className="about-page-main-section">
            <div className="about-page-main-container">
                <DeaktopAnimationScroll />
                <div className="about-page-content-container">
                    <DesktopTextScrollAnimation/>
                </div>
            </div>
        </section>
        </>
    )
}


function AboutMainPage(){
    const Desktop = useMediaQuery({query:'(min-width: 1224px)'})

    return(
        <>
        { Desktop && <DeaktopAboutMainPage /> }
        </>
    )
}

export default AboutMainPage