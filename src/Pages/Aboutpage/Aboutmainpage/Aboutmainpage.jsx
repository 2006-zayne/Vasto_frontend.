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
            end:"bottom top",
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

function DeaktopAboutMainPage(){
    
    return(
        <>
        <section className="about-page-main-section">
            <div className="about-page-main-container">
                <DeaktopAnimationScroll />
                <div className="about-page-content-container">

                </div>
            </div>
        </section>
        <div className="h"></div>
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