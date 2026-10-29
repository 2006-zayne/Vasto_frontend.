import {React} from 'react'

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

function FeaturesCards({type, img, header, text, pagraphWidth}){
    return(
        <>
        { type == "card" && <Cards img={img} header={header} text={text} pagraphWidth={pagraphWidth}/> }
        { type == "cardFull" && <CardsFull img={img} header={header} text={text} pagraphWidth={pagraphWidth}/> }
        </>
    )
}

export default FeaturesCards