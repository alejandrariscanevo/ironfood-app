import React from 'react';
import Icon1 from '../../images/Bowl1.jpg'
import Icon2 from '../../images/healthy-2.jpg'
import Icon3 from '../../images/Bowl2.jpg'

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from '../ProvidedServices/ProvidedServicesStyles';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Find a Meal Plan</ServicesH2>
                    <ServicesP>Find the best meal plan for you</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Share Your Recipes</ServicesH2>
                    <ServicesP>Access our platform anywhere in the world</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Measure your Macros</ServicesH2>
                    <ServicesP>Unlock our special membership</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
