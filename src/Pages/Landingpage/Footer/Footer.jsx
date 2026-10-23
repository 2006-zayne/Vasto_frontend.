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
                <div className="footer-content-container">
                    <div className="footer-logo">
                        <h1 className="dskt-logo-footer">VASTO</h1>
                        <p>community, learning-resource, opotunity, growth and platform for students</p>
                    </div>
                    <div className="contact-section">
                        <h2 className="lable-footer-link">CONTACTS</h2>
                        <div className="contavt-links">
                            <a href="mailto:"><span className="footer-link-lable">Email </span> <span className="footer-link">vasto@gmail.com</span></a>
                            <a href="mailto:"><span className="footer-link-lable">Email </span> <span className="footer-link">vasto@gmail.com</span></a>
                            <a href="tel:+"><span className="footer-link-lable">Phone </span> <span className="footer-link">+254123456789</span></a>
                            <a href="tel:+"><span className="footer-link-lable">Phone </span> <span className="footer-link">+254123456789</span></a>
                        </div>
                    </div>
                    <div className="footer-quick-links">
                        <h2 className="lable-footer-link">QUICK LINKS</h2>
                        <div className="links-action">
                            <Link to="/" className="footer-lnk">Home</Link>
                            <Link to="/about" className="footer-lnk">About</Link>
                            <Link to="/features" className="footer-lnk">Features</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-logo-container">
                    <h1>VASTO</h1>
                </div>
            </section>
            </>
        )
    }

    function Mobile(){
        return(
            <>
            <section className="mobile-footer-section">
                <div className="text-mobile-footer-container">
                    <div className="footer-logo">
                        <h2>VASTO</h2>
                        <p>community, learning-resource, opotunity growth and platform for students</p>
                    </div>
                    <div className="mobile-footer-contact-container">
                        <h2 className="mobilr-lable-footer-link">CONTACTS</h2>
                        <div className="mobile-contact-links">
                            <a href="mailto:">vasto@gmail.com</a>
                            <a href="mailto:">vasto@gmail.com</a>
                            <a href="tel:+">+254 12345678</a>
                            <a href="tel:+">+254 12345678</a>
                        </div>
                    </div>
                    <div className="mobile-footer-quick-links">
                        <h2 className="mobilr-lable-footer-link">QUICK LINKS</h2>
                        <div className="mobile-links-action">
                            <Link to="/" className="footer-lnk">Home</Link>
                            <Link to="/about" className="footer-lnk">About</Link>
                            <Link to="/features" className="footer-lnk">Features</Link>
                        </div>
                    </div>
                </div>
                <div className="mobile-footer-bottom-logo">
                    <h1>VASTO</h1>
                </div>
            </section>
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
