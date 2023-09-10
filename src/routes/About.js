import React from "react";

import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import Aboutcontent from "../Components/Aboutcontent";

const About = () =>{
    return(
        <div>
            <NavBar />
            <HeroImg2 heading="ABOUT." text="Hi its your friendly Developer"/>
            <Aboutcontent />
            <Footer />
        </div>
    )
};

export default About