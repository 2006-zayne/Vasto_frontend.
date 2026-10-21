import {React} from 'react'
import './Buttons.css'

function Buttons({name, type}){
   
    return(
        
        <>
            {type=="link-btn" && <button className='MainBtn'>{name}</button>}
        </>
    )

}

export default Buttons