import React from "react";
import HeroSection from "./HeroSection";
import GetDemo from "./GetDemo";
import AboutSection from "./AboutSection";
import WorksSection from "./WorkSection";
function App()
{
    return(
        <div className="main">
            <HeroSection/>
            <GetDemo/>
            <AboutSection/>
            <WorksSection/>
        </div>
    )
}
export default App;
