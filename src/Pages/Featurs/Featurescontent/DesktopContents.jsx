import { React, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import imgGroup from '../../../assets/groups.jpeg'
import imgMessage from '../../../assets/message.jpeg'
import imgNotification from '../../../assets/notification.jpeg'

function Cards({img, header, text, pagraphWidth}){
    return(
        <>
        <div className='flex justify-center items-center
        flex-wrap gap-4 flex-col'>
            <img src={img} alt="Product image" srcset="" className='size-50 rounded-2xl'/>
            <div className='flex items-start justify-center flex-col gap-3'>
                <h3 className='text-3xl font-bold'>{header}</h3>
                <p className={pagraphWidth}>{text}</p>
            </div>
        </div>
        </>
    )
}

function CardsFull({img, header, text, pagraphWidth}){
    return(
        <>
        <div className='flex justify-center items-center col-start-1 col-end-3
        flex-wrap gap-15 flex-col'>
            <img src={img} alt="" srcset="" className='size-50 rounded-2xl'/>
            <div className='flex items-start justify-center flex-col gap-3'>
                <h3 className='text-3xl font-bold'>{header}</h3>
                <p className={pagraphWidth}>{text}</p>
            </div>
        </div>
        </>
    )
}

function DesktopContent(){
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

                <Cards 
                    img={imgGroup}
                    header="Entertainment"
                    text="In Tailwind CSS, the height of an element 
                        is controlled using the  utility classes. 
                        These classes map directly to the CSS height property and 
                        follow a standardized spacing scale"
                    pagraphWidth="w-92"
                />

                <Cards 
                    img={imgMessage}
                    header="Entertainment"
                    text="In Tailwind CSS, the height of an element 
                        is controlled using the  utility classes. 
                        These classes map directly to the CSS height property and 
                        follow a standardized spacing scale"
                    pagraphWidth="w-92"
                />
                
                <CardsFull 
                    img={imgNotification}
                    header="Entertainment"
                    text="In Tailwind CSS, the height of an element 
                        is controlled using the  utility classes. 
                        These classes map directly to the CSS height property and 
                        follow a standardized spacing scale"
                    pagraphWidth="w-150"
                />

            </div>

            <div className='h-full w-full px-2.5 py-3.5 grid 
            grid-cols-2 grid-rows-2 gap-1.5 absolute translate-x-full overflow-hidden'>

                <CardsFull
                    img={imgGroup}
                    header="Entertainment"
                    text="In Tailwind CSS, the height of an element 
                        is controlled using the  utility classes. 
                        These classes map directly to the CSS height property and 
                        follow a standardized spacing scale"
                    pagraphWidth="w-150"
                />

                <Cards 
                    img={imgMessage}
                    header="Entertainment"
                    text="In Tailwind CSS, the height of an element 
                        is controlled using the  utility classes. 
                        These classes map directly to the CSS height property and 
                        follow a standardized spacing scale"
                    pagraphWidth="w-92"
                />
                
                <Cards 
                    img={imgNotification}
                    header="Entertainment"
                    text="In Tailwind CSS, the height of an element 
                        is controlled using the  utility classes. 
                        These classes map directly to the CSS height property and 
                        follow a standardized spacing scale"
                    pagraphWidth="w-92"
                />

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