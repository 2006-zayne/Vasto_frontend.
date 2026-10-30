import { React } from 'react'
import Navigationbar from '../../components/Navigationbar/Nav'
import Desktop from './Featurescontent/DesktopContents'
import MobileDevices from './Featurescontent/MobileContent'
import FooterSection from '../../components/Footer/Footer'

function FeaturesPage(){

    return(
        <>
        <Navigationbar />
        <Desktop />
        <MobileDevices />
        <FooterSection />
        </>
    )
}

export default FeaturesPage