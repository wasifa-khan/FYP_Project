import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import "./Ourteam.css";

const people = [
  {
    name: 'Humna Siddiqui',
    role: 'UI/UX Designer',
    description: 'Experienced UI/UX designer with a passion for creating intuitive and visually appealing user interfaces.',
    linkedin: 'https://www.linkedin.com',
    
    github: 'https://github.com',
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Fiza Sahar',
    role: 'Full Stack Web Developer',
    description: 'Experienced in building scalable web applications with a focus on user experience.',
    linkedin: 'https://www.linkedin.com',
    github: 'https://github.com',
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Wasifa Asad Khan',
    role: 'Mobile App Developer',
    description: '"Seasoned Mobile App Developer crafting top-notch iOS and Android apps with modern tech."',
    linkedin: 'https://www.linkedin.com',
    github: 'https://github.com',
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Sidra Hafeez',
    role: 'SQA Engineer',
    description: 'SQA engineer with expertise in manual and automated testing methodologies. ',
    linkedin: 'https://www.linkedin.com',
    github: 'https://github.com',
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];


export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32" id="Ourteam">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
         <h2 className="text-3xl mt-20 font-bold tracking-tight text-custom-color sm:text-4xl">Meet Our Team</h2>

          <p className="mt-6 text-lg leading-8 text-black-600 text-justify">
            At Career Mentor, our team is dedicated to guiding job seekers through resume/CV building and interview preparation with expertise and passion.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-10 xl:col-span-2 ml-10">
          {people.map((person) => (
            <li key={person.name} className="border-2 border-gray-300 rounded-lg p-4">
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt={person.name} />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  <p className="text-sm leading-6 text-gray-500">{person.description}</p>
                  <div className="social-icons">
  <a href={person.linkedin}><FaLinkedin /></a>
  <a href={person.github}><FaGithub /></a>
  <a href={person.instagram}><FaInstagram /></a>
  <a href={person.facebook}><FaFacebook /></a> {/* Add Facebook icon and link */}
</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
