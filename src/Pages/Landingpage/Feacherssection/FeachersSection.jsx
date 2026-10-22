import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../../../components/buttonsCommponent/Buttons";
import img from '../../../assets/vasto_phone_mockup-removebg-preview.png'
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import './Feacher.css'

function FeacherLogo(){
    return(
        <>
        <div className="feacher-logo">
            <h1>FEAT <span>URE'S</span></h1>
        </div>
        </>
    )
}

function FeacherContent(){
    const DesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

    function Desktop(){
        document.addEventListener('DOMContentLoaded',function(){
            gsap.registerPlugin(ScrollTrigger)

            gsap.from(".phone--img", {
                opacity:0,
                y:-75,
                
            });
        })

        return(
            <>
            <div className="feacher--container">
                <div className="header-container">
                    <h2>BE PART OF SOME THING AMAIZING AND START EXPLORING</h2>
                </div>
                <div className="img-container">
                    <img src={img} alt="img-phonr" className="phone--img" srcset="" />
                </div>
                <div className="paragraph-container">
                    <p>
                        <span>Social feed:</span> (posts)Create text posts, image posts 
                        (with automatic thumbnail generation and WebP conversion), 
                        video posts (with HLS transcoding for mobile streaming), 
                        and link posts. <br />
                        <span>Groups:</span> Join open groups, request to join 
                        approval-based groups, or receive invitations to invite-only groups. <br />
                        <span>Messaging: </span>Direct 1:1 and group conversations with real-time delivery over WebSockets. <br />
                    </p>
                    <Link to="/features" className="features-link">
                        <Buttons name="Learn more" type="link-btn"/>
                    </Link>
                </div>
            </div>
            </>
        )
    }

    return(
        <>
        {DesktopOrLaptop && <Desktop/>}
        </>
    )
}

function FeachersSection(){
    return(
        <>
        <section className="feachers--section">
            <div className="feachers--container">
                <FeacherLogo/>
                <FeacherContent/>
            </div>
        </section>
        </>
    )
}

export default FeachersSection