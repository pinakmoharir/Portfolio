import "./Formstyles.css";


import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="https://formspree.io/f/xnqkkzzw" method="POST">
            <label>Your Name</label>
            <input 
              type="text" 
              name="username" 
              placeholder="username" 
              autoComplete="off" 
              required>
            </input>
            <label>Email</label>
            <input 
              type="email"               
              name="Email" 
              placeholder="Email" 
              autoComplete="off" 
              required></input> 
            <label>Phone Number</label>
            <input 
              type="number"
              name="Number" 
              placeholder="Number" 
              autoComplete="off" 
              required></input>
            <label>Message</label>
            <textarea 
              name="Message"
              autoComplete="off" 
              required
              rows="8" 
              placeholder="Type Your message here"></textarea>
            <button className="btn" type="submit" value="send">Submit</button>
        </form>
    </div>
  )
}

export default Form;
