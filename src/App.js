import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
// import firebase from "./firebase";
import Project from "./routes/Project";
import "./index.css";
import { Route, Routes } from "react-router-dom";

// const ref = firebase.firestore().Viewers("Contacting");

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Project" element={<Project/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
  )
}

export default App;
