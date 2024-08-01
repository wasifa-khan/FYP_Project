import React from 'react';
import { Link } from 'react-router-dom';
import './build.css'; // Import the CSS file

const Build = () => {
  return (
    <div className="build-container">
      <div className="hidden-box" />
      <div className="content-row">
        <div className="content-col">
          <a className="resume-title">
            Resume Templates
          </a>
          <i className="experience-info">
            /0-5 years of experience
          </i>
        </div>
      </div>
      <section>
        <div className="bg-circle" />
        <Link to="/Resume">
          <img
            className="img1"
            loading="lazy"
            alt=""
            src="/images/ats8.png"
          />
        </Link>
        <img
          className="img2"
          loading="lazy"
          alt=""
          src="/images/ats3.png"
        />
        <img
          className="img3"
          loading="lazy"
          alt=""
          src="/images/ats6.png"
        />     
        <img
          className="img4"
          loading="lazy"
          alt=""
          src="/images/ats7.png"
        />  
      </section>
    </div>
  );
};

export default Build;
