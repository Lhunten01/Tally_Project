import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React from "react";
import HeroSection from "./HeroSection";
import GetDemo from "./pages/GetDemo";
import AboutSection from "./pages/AboutSection";
import Features from "./pages/Features.js";
import WorksSection from "./pages/WorkSection";
import CPASec from "./pages/CPAsec.js";
import FAQ from "./pages/FAQ.js";
import ContactSection from "./pages/ContactSection.js";
import Footer from "./pages/Footer.js";
import Navbar from "./Navbar.js";
// import WorksSection from "./WorkSectionFail";
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
