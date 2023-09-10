import "./Formstyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input> 
            <label>Phone Number</label>
            <input type="number"></input>
            <label>Message</label>
            <textarea rows="8" placeholder="Type Your message here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form