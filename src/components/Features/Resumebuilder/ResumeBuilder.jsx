import React from 'react';
import { Link } from 'react-router-dom';

const ResumeBuilder = ({ title, imageSrc, buttonName }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg object-cover h-60" src={imageSrc} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2 dark:text-white overflow-hidden overflow-ellipsis whitespace-nowrap">{title}</h5>
          </a>
          <button className="text-white bg-blue-700 font-bold hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <Link to="/resume-builder">{buttonName}</Link> 
          </button>
        </div>
      </div>
    </div>
  );
};
  
export default ResumeBuilder;
