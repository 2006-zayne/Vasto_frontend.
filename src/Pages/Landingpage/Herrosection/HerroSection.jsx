import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from '../../../components/buttonsCommponent/Buttons'
import img from '../../../assets/Tilted_VASTO_App_Smartphone_Mockup-removebg-preview.png'
import './Herro.css'

function Text(){
    return(
        <>
        <div className="text-container">
            <div className="manifest-text-container">
                <h1>
                    <span className='herro-logo'>Vasto App</span> we are the future.
                </h1>
            </div>
            <div className="herro-paragraph">
                <p>Vasto helps you to <span>Learn, communicate with friends loved ones & groups, and to Grow.</span>
                Get statred today in making of tommorow with vasto. <br />
                Use the actions bellow to get started or learn more about vasto
                 </p>
            </div>
            <div className="herro-actions">
                <Link className='get-started-link' to="/login">
                    <Buttons name="Get Started" type="link-btn"/>
                </Link>
                <Link className='get-started-link' to="/download">
                    <Buttons name="Download" type="link-btn"/>
                </Link>
            </div>
        </div>
        </>
    )
}

function ImgSide(){
    return(
        <>
        <div className="img-container">
            <img src={img} alt="Herro" className='phone' />
            <div className="lable">
                <h1 className='font-bold'>VASTO</h1>
            </div>
        </div>
        </>
    )
}

function HerroSection(){
    return(
        <>
            <section className='herro-section'>
                <Text/>
                <ImgSide/>
            </section>
        </>
    )
}

export default HerroSection