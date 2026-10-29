import React from "react";
import Navigationbar from '../../components/Navigationbar/Nav'
import img from '../../assets/404.png'

function FourOFour(){

    return(
        <>
        <Navigationbar />
        <section className="h-dvh w-dvw flex justify-center items-center overflow-hidden">
            <img src={img} alt="404" className="h-full w-full" />
        </section>
        </>
    )
}

export default FourOFour