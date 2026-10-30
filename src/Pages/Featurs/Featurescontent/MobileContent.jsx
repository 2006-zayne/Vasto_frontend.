import { React, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import CardJsonData from './FeaturesData'

function MobileCard({img, header, text}){
    return(
        <>
        <div className='w-[8cm] flex justify-end items-center flex-col relative rounded-2xl'>
            <img src={img} alt="card" srcset="" width="100%" className='rounded-2xl'/>
            <div className='h-70 hover:h-full transition-all w-full flex justify-center items-center gap-7
            flex-col absolute z-10 text-blue-50 bg-[#081026df] rounded-2xl'>
                <h1 className='text-3xl'><FontAwesomeIcon icon={faArrowUp} /></h1>
                <h2 className='text-4xl font-bold'>{header}</h2>
                <p className='text-center'>{text}</p>
            </div> 
        </div>
        </>
    )
}

function MobileContent(){
    const cardData = JSON.parse(CardJsonData)
    return(
        <>
        <section className='h-auto w-dvw py-15'>
            <div className='h-auto w-full flex justify-center items-center flex-wrap flex-row gap-10'>
                {
                    cardData.DivOne.map((element)=>(
                        <MobileCard 
                        id={element.id}
                        img={element.img}
                        header={element.tittle}
                        text={element.text}
                        />
                    ))

                    
                }
                {
                    cardData.DivTwo.map((element)=>(
                        <MobileCard 
                        id={element.id}
                        img={element.img}
                        header={element.tittle}
                        text={element.text}
                        />
                    ))
                }
                
            </div>
        </section>
        </>
    )
}

function MobileDevices(){
    const MobileAndTablet = useMediaQuery({query:'(max-width:1224px)'})
    return(
        <>
        { MobileAndTablet && <MobileContent /> }
        </>
    )
}

export default MobileDevices