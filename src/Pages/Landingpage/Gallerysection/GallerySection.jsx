import {React, useRef} from "react";
import img from '../../../assets/Students_Learning_Together.jpeg'
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Gallery.css"

gsap.registerPlugin(ScrollTrigger)

function GallerySection(){
    const DesktopOnly = useMediaQuery({ query: '(min-width: 1224px)' });

    function DesktopGallery(){
        const container = useRef(null)

        useGSAP(()=>{
            gsap.from(".gallery-img",{
                y:500,
                scale:0.90,
                opacity:0,
                scrollTrigger:{
                    trigger:".gallery-img",
                    start:"top 100%",
                    end:"top 65%",
                    scrub:1,
                    markers:false
                }
            })
        },{scope:container})

        return(
            <>
            <section ref={container} className="gallery-section">
                <div className="gallery-container">
                    <div className="img-gallery-container">
                        <img src={img} alt="gallery" className="gallery-img" srcset="" />
                    </div>
                    <div className="gallery-text">
                        <h1>Be part of something Greate?</h1>
                        <p>Upload and browse past papers, lecture notes, slides, assignments, and other study materials across 13 categories. <br />
                        Documents are organised by faculty, school, department, programme, and academic unit (course) with semester and year tracking. <br />
                        </p>
                    </div>
                </div>
            </section>
            </>
        )
    }

    return(
        <>
        { DesktopOnly && <DesktopGallery /> }
        </>
    )
}

export default GallerySection