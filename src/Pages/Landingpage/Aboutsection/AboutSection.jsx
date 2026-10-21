import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../../../components/buttonsCommponent/Buttons";
import './About.css'


function AboutSection(){
    return(
        <>
        <section className="about-section">
            <div className="text-about-container">
                <p>
                    Vasto was formerly known as Pwaninet. 
                    The service domain (pwaninet.app), app 
                    identifiers, and technical references may 
                    still use the previous name, which refer's to the same service.
                </p>
                <Link className="about-link" to="/about"><Buttons name="Read More" type="link-btn"/></Link>
            </div>
        </section>
        </>
    )
}

export default AboutSection