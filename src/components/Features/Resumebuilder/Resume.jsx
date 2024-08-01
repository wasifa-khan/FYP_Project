import React from 'react';
import Header from './Header';
import Contact from './Contact';
import Education from './Education';
import Expertise from './Expertise';
import About from './About';
import Experience from './Experience';
import Certification from './Certification';
import './styles.css'

const Resume = ({ data }) => (
    <div className="container">
       <Header name={data.name} passion={data.passion} />
        <div className="main-content">
            <section className="left-column">
                <Contact contact={data.contact} />
                <Education education={data.education} />
                <Expertise expertise={data.expertise} />
            </section>
            <section className="right-column">
                <About about={data.about} />
                <Experience experience={data.experience} />
                <Certification certification={data.certification} />
            </section>
        </div>
    </div>
);

export default Resume;
