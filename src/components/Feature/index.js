import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements.js'
import { Link } from 'react-router-dom'

const Feature = () => {
    return (
        <FeatureContainer>
           <h1>Share Your Recipes</h1> 
           <Link to="/find-meal-plan">
           <FeatureButton>Start Now</FeatureButton>
           </Link>
        </FeatureContainer>
    )
}

export default Feature
