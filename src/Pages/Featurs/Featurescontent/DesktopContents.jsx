import { React, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import FeaturesCards from '../../../components/Featurescards/Cards'
import CardJsonData from './FeaturesData'

gsap.registerPlugin(ScrollTrigger)

function DesktopContent(){
    const CardsData = JSON.parse(CardJsonData)
    const container = useRef(null)

    useGSAP(()=>{

        gsap.to(container.current,{
            x:"-100%",
            scrollTrigger:{
                trigger:container.current,
                start:"top top",
                end:"top -100%",
                pin:true,
                scrub:1,
                markers:false
            }
        })

    },{scope:container})

    return(
        <>
        <section ref={container} className='scroller h-dvh w-auto 
        flex justify-center items-center relative'>

            <div className='h-full w-full px-2.5 py-3.5 grid grid-cols-2 
            grid-rows-2 gap-1.5 absolute overflow-hidden'>
                
                {
                    CardsData.DivOne.map((element)=>(
                        <FeaturesCards
                            key={element.id}
                            type={element.type}
                            img={element.img}
                            header={element.tittle}
                            text={element.text}
                            pagraphWidth={element.paragraphWidth}
                        />
                    ))
                }
                

            </div>

            <div className='h-full w-full px-2.5 py-3.5 grid 
            grid-cols-2 grid-rows-2 gap-1.5 absolute translate-x-full overflow-hidden'>

                {
                    CardsData.DivTwo.map((element)=>(
                        <FeaturesCards
                            key={element.id}
                            type={element.type}
                            img={element.img}
                            header={element.tittle}
                            text={element.text}
                            pagraphWidth={element.paragraphWidth}
                        />
                    ))
                }

            </div>
        </section>
        </>
    )
}

function Desktop(){
    const LaptopAndDesktop = useMediaQuery({query:'(min-width:1224px)'})
    return(
        <>
        { LaptopAndDesktop && <DesktopContent /> }
        </>
    )
}

export default Desktop