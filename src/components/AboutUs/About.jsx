import React from 'react'
import aboutusImg from '../../assets/Images/aboutusImg.jpg'; 
import './About.css'

function About() {
  return (
    <>
    <div  id='about'>
         <h1 className="md:text-7x1 text-4x1 font-bold  mb-6 leading-relaxed h1-about text-center">About Us</h1>
    </div>
    <div  className='md:px-14 max-w-s mx-auto aboutus'>
   
      <div className='flex flex-col md:flex-row justify-between items-center '> 
    
        <div className='md:w-1/2  m-6' >
  <h2 class="h2-About">Unleash Your Career Potential with Our All-in-One Platform.</h2>
  <p class="text-tartary text-lg mb-7 ">Frustrated with crafting resumes and acing interviews? We built a one stop platform to empower you!Create impactful resumes, master common interview questions across fields, and practice with confidence all in one place. Simplify your job search and take control of your career journey today.</p>
  <button className="btnAboutUs">Explore Us</button>
</div>
<div className='md:w-1/2 m-6'>
  <img 
    src={aboutusImg} 
    alt="" 
    className="img-with-border" 
  />
</div>
</div>

    </div>
    </>
  )
}

export default About