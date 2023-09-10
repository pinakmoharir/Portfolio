import React from 'react'
import "./Footerstyle.css";

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

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
                <h4>About the company</h4>
                <p> This is Pinak Pankaj Moharir CEO & Founder Of Ace Games<br></br>
                I Hope you like the page ,projects and their design.</p><br></br>
            <div className='social'>
                <FaFacebook size={30} style={
                    {color:"#fff", marginRight:"1rem"}} />
                <FaInstagram size={30} style={
                    {color:"#fff", marginRight:"1rem"}} />
                <FaTwitter size={30} style={
                    {color:"#fff", marginRight:"1rem"}} />
                <FaLinkedin size={30} style={
                    {color:"#fff", marginRight:"1rem"}} />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer