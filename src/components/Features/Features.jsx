import React from 'react';
import './Features.css';

import "./Features.css";
import ResumeUpload from './uploadresume/resumeupload';
import resume from '../../assets/Images/checker.png';
import ResumeBuilder from './Resumebuilder/ResumeBuilder';
import build from '../../assets/Images/resumeBuilder.jpg';
import InterviewPreparation from './interviewpreparation/interviewpreparation';
import interview from '../../assets/Images/interviewprep.png';
import JobFinding from './Jobfinding/jobfinding';

import job from '../../assets/Images/jobfind.jpg';

import Form from './interviewpreparation/Form';
import Searchbar from './Jobfinding/Job_searchbar/Searchbar';



const Features = () => {
  return (

    <>
    <div className='caption' id='features'>
      <h1>Your Career, Our Guidance</h1>
      </div>
    <div className="features-container">
      <div className="feature">
        <ResumeUpload
          title="Resume Checker"
          imageSrc={resume}
          buttonName="Upload Resume "
        />
      </div>

      <div className="feature">
        <ResumeBuilder
          title="Resume Builder"
          imageSrc={build}
          buttonName="Build Your Resume"
        />
      </div>
      <div className="feature">
        <InterviewPreparation
          title="Interview Preparation"
          imageSrc={interview}
          buttonName="Interview Preparation"
        />
      </div>
      <div className="feature">
        <JobFinding
          title="Job Finding"
          imageSrc={job}
          buttonName="Job Finding"
        />
      </div>
      
    </div>
    </>
  )}


export default Features;
