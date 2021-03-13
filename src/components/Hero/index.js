import React, {useState} from 'react'
import Sidebar from '../Sidebar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'
import { Link } from 'react-router-dom';

const Hero = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <HeroContainer>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Share Your Recipes</HeroH1>
                    <HeroP>and find meal plans</HeroP>
                    <Link to="/signup">
                    <HeroBtn >Sign Up</HeroBtn>
                    </Link>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
