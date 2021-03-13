import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Feature from '../components/Feature'

import ProvidedServices from '../components/ProvidedServices'

import Footer from '../components/Footer'

const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle}/> 
            <Hero />
            <ProvidedServices />
            <Feature />
            
        </>
    )
}

export default Home
