import React from "react";

import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import Form from "../Components/Form"
// import HeroImg3 from "../Components/HeroImg3";

const Contact = () =>{
    return(
        <div>
            <NavBar />
            <HeroImg2 heading="CONTACT." text="Lets have a chat"/>
            <Form />
            <Footer />
        </div>
    )
};

export default Contact