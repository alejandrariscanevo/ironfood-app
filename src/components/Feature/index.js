import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements.js'

const Feature = () => {
    return (
        <FeatureContainer>
           <h1>Bowl of the Day</h1> 
           <p>Pesto Salad with Cherry Tomatoes</p>
           <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
