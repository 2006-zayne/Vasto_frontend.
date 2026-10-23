import { Link } from 'react-router-dom'
import img from '../../assets/vasto-transparent.png'
import Buttons from '../buttonsCommponent/Buttons'
import {useMediaQuery} from 'react-responsive'
import gsap from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Nav.css'
import { useEffect } from 'react'


function MobileNav(){
    useEffect(()=>{
        gsap.to(".slider", {
        x: -5000,
        duration: 0.5,
        ease: 'power2.inOut'
        });
    },[])
   
    const slide = () => {
        gsap.to(".slider", {
        x: -5000,
        duration: 0.5,
        ease: 'power2.inOut'
        });
    };
    const slidefrom = ()=>{
        gsap.to(".slider", {
        x:0,
        duration: 0.5,
        ease: 'power2.inOut'
        });
    }
    return(
        
        <>
        <nav className='mobile-nav'>
            <div className="mobile-nav-icon">
                <div className="logo">
                    <img src={img} alt="logo" />
                    <h2>Vasto</h2>
                </div>
                <FontAwesomeIcon icon={faBars} onClick={slidefrom} className="nav-icon" />
            </div>
            <div className="slider">
                <div className="ex-icon-container">
                    <FontAwesomeIcon icon={faXmark} onClick={slide} className="nav-icon"/>
                </div>
                <div className="links">
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/about'> About</Link>
                    <Link className='link' to='/features'>Features</Link>
                </div>
            </div>
        </nav>
        </>
    )
}


function DesktopNav(){
    return(
        <>
        <nav className='desktop-nav'>
            <div className="desktop-nav-icon">
                <div className="desktop-logo">
                    <img src={img} alt="logo" />
                    <h2>Vasto</h2>
                </div>
                <div className="desktop-link">
                    <Link className='link desktop--link' to='/'>
                        <Buttons name="Home" type="link-btn"/>
                    </Link>
                    <Link className='link desktop--link' to='/about'>
                        <Buttons name="About" type="link-btn"/>
                    </Link>
                    <Link className='link desktop--link' to='/features'>
                        <Buttons name="Features" type="link-btn"/>
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}

function Navigationbar(){
    const DesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    const TabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    return(
        <>
            {TabletOrMobile && <MobileNav />}
            {DesktopOrLaptop && <DesktopNav />}
        </>
    )
}

export default Navigationbar