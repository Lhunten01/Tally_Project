import React from 'react'
import HeroSection from "./HeroSection";
import GetDemo from "./GetDemo";
import AboutSection from "./AboutSection";
import WorksSection from "./WorkSection";
import Features from "./Features";
import CPASec from "./CPAsec";
import FAQ from "./FAQ";
import ContactSection from "./Contact";
import Footer from "./Footer";
import Navbar from './Navbar';
const Home = () => {
  return (
    <div className='mt-[100px]'>
      
        <Navbar/>
        <HeroSection/>
        <GetDemo/>
        <AboutSection/>
        <WorksSection/>
        <Features/>
        <CPASec/>
        <FAQ/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default Home