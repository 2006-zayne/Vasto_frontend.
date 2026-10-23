import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import './Footer.css'

function FooterSection(){

    function Descktop(){
        return(
            <>
            <section className="footer--section">

            </section>
            </>
        )
    }

    function Mobile(){
        return(
            <>
            <h1>mobile</h1>
            </>
        )
    }


    const DesktopAndLaptops = useMediaQuery({query:'(min-width:1224px)'});
    const MobileAndTablet = useMediaQuery({query:'(max-width:1224px)'});
    return(
        <>
        <footer className="footer--section">
            { DesktopAndLaptops && <Descktop />}
            { MobileAndTablet && <Mobile />}
        </footer>
        </>
    )
}

export default FooterSection
