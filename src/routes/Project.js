import React from 'react'

import HeroImg2 from '../Components/HeroImg2';
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Work from '../Components/Work';
function Project() {
  return (
    <div>
        <NavBar />
        <HeroImg2 heading="PROJECTS." text="My Recent Works" />
        <Work />
        <Footer />
    </div>
  )
};

export default Project ;