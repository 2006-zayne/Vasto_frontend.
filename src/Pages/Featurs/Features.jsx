import { React } from 'react'
import Navigationbar from '../../components/Navigationbar/Nav'
import Desktop from './Featurescontent/DesktopContents'
import FooterSection from '../../components/Footer/Footer'

function FeaturesPage(){

    return(
        <>
        <Navigationbar />
        <Desktop />
        <FooterSection />
        </>
    )
}

export default FeaturesPage