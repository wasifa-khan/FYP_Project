import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/AboutUs/About";
import Features from "./components/Features/Features";
import Login from "./components/LoginPage/Login";
import Signup from "./components/SignupPage/Signup";
import ResumeChecker from "./components/Features/ResumeChecker/ResumeChecker";
import Form from './components/Features/interviewpreparation/Form';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRef, useState } from "react"; 
import Searchbar from './components/Features/Jobfinding/Job_searchbar/Searchbar';
import Wasfa from "./components/Features/Resumebuilder/pages/build";
import Resume from './components/Features/Resumebuilder/Resume';
import ResumeForm from './components/Features/Resumebuilder/ResumeForm';
// import  Joblisting  from './components/Features/Jobfinding/Job_searchbar/Joblisting';

const App = () => {
  const aboutUsRef = useRef(null);

  const handleAboutClick = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Navbar handleAboutClick={handleAboutClick} />
      <Routes>
        <Route path="/" element={<Home aboutUsRef={aboutUsRef} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/resume-checker" element={<ResumeChecker />} /> {/* Add this route for ResumeChecker */}
        <Route path="/Form"element={<Form />} />
        <Route path="/resume-builder" element={<Wasfa />} />
        <Route path="/resume" element={<ResumeForm />} />
        <Route path="/Resume" element={<Resume />} />
           
        <Route path= "/Searchbar" element={<Searchbar/>}/>
       {/* <Route path='/Joblisting' element = {<Joblisting/>}/> */}
      </Routes>
  
    </Router>
  );
};

export default App;
