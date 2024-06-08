import React from "react";
import "./app.css"
import HeroSection from "./HeroSection";
import GetDemo from "./GetDemo";
import AboutSection from "./AboutSection";
import WorksSection from "./WorkSection";
import Features from "./Features";
import CPASec from "./CPAsec";
import Navbar from "./Navbar";
import FAQ from "./FAQ";
import ContactSection from "./Contact";
import Footer from "./Footer";
function App()
{
    return(
        <div className="main">
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
export default App;
