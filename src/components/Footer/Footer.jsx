import React, { useState } from 'react';
import logo from '../../assets/Images/logo.jpeg';
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import "./Footer.css";

const ComponentName = () => {        
    return (
        <div class="container">
        <section className="py-10  sm:pt-16 lg:pt-20 Footer-sec">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img className="Footer-logo" src={logo} alt="Logo" />


                <p className="text-base leading-relaxed text-justify mt-7">It is one-stop platform offering resume/CV tools, personalized interview prep, and skill-specific insights, helping candidates ace their job searches effortlessly.</p>

               
            </div>

            <div>
                <p className="text-lg font-semibold tracking-widest text-white-400 uppercase">Useful links</p>

                <ul className="mt-6 space-y-3">
                    <li>
                        <a href="#home" title="" className="flex text-base  transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </a>
                    </li>

                    <li>
                        <a href="#about" title="" className="flex text-base  transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
                    </li>

                    <li>
                        <a href="#features" title="" className="flex text-base  transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>
                    </li>

                    <li>
                        <a href="#Ourteam" title="" className="flex text-base  transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Team </a>
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-lg font-semibold tracking-widest uppercase">Features</p>

                <ul className="mt-6 space-y-3">
                    <li>
                        <a href="#" title="" className="flex text-base  transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resume Checker </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resume Builder </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base  transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Interview </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base  transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Job Finding </a>
                    </li>
                </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                <p className="text-lg font-semibold tracking-widest  uppercase">Follow Us On Social Media </p>
                <ul className="flex items-center space-x-3 mt-9">
    <li>
        <a href="#" className="icon instagram">
            <FaInstagram className="icon-svg" />
        </a>
    </li>

    <li>
        <a href="#" className="icon linkedin">
            <FaLinkedin className="icon-svg" />
        </a>
    </li>

    <li>
        <a href="#" className="icon facebook">
            <FaFacebook className="icon-svg" />
        </a>
    </li>

    <li>
        <a href="#" className="icon github">
            <FaGithub className="icon-svg" />
        </a>
    </li>
</ul>

            </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-300 line " />

        <p className="text-sm text-center ">© Copyright 2024, All Rights Reserved by Career Mentor</p>
    </div>
</section>
</div>

    )
}
export default ComponentName;