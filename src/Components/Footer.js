import React from 'react'
import "./Footerstyle.css";

import { FaHome, FaPhone, FaMailBulk, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                
                    <div className='location'>
                    <FaHome size={25} style={
                        {color:"#fff", marginRight:"2rem"}} />
                    </div>
                    <div>
                        <p>St Vincent Pallotti College Of Engineering and Technology,Gavsi,Manapur,Nagpur,Maharashtra</p>
                    </div>
            
                <div className='phone'>
                    <h4><FaPhone size={25} style={
                    {color:"#fff", marginRight:"2rem"}} />
                    +91 9112952848 </h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={25} style={
                    {color:"#fff", marginRight:"2rem"}} />
                    pinakmoharir12@gmail.com </h4><br></br>
                </div>
            </div>
           
            <div className='right'>
                <h4>About Me</h4>
                <p> This is Pinak Pankaj Moharir a B-tech artificial intellegence student <br></br>
                I am a software development enthusiast who is ready to learn new technologies.</p><br></br>
            <div className='social'>
                <a href='https://github.com/pinakmoharir'>
                <FaGithub size={30} style={
                    {color:"#fff", marginRight:"1rem"}} />
                </a>
                <a href='https://www.instagram.com/its_pinak_btw/'>
                <FaInstagram size={30} style={
                    {color:"#fff", marginRight:"1rem"}} />
                </a>
                {/* <a href=''>
                <FaTwitter size={30} style={
                    {color:"#fff", marginRight:"1rem"}} />
                </a> */}
                <a href='www.linkedin.com/in/pinak-moharir-625917227'>
                <FaLinkedin size={30} style={
                    {color:"#fff", marginRight:"1rem"}} />
                </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
