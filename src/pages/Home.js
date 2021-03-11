import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Products from '../components/Products'
import { productData, productDataTwo, } from '../components/Products/data'
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
            <Products data={productData} />
            <Feature />
            <Products data={productDataTwo} />
        </>
    )
}

export default Home
