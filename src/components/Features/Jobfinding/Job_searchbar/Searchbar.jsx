import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './Searchbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Searchbar() {
  const [role, setRole] = useState('');
  return (
    <>
    <div className="searchDiv grid gp-10 gap-8 md:grid-cols-1 md:items-center bg-grey-200 mb-2 rounded-lg p-12 items-center">
      <div className='color'>
        <p>Find the <span className='cstyle'>One</span> that <br></br><span className='cstyle'>Best</span> for you!</p>

        <p className='font'> Explore diverse job opportunities tailored to your skills and bright the career......!  </p>
      </div>
      <form action="" className='flex-col items-center'>
        <div className='firstDiv flex justify-between items-center rounded-[80px] gap-[10px] 
         bg-white p-5 shadow-grey-700 w-[100%] h-200'>

          <div className='relative flex gap-1 items-center justify-center margin:auto rounded-[70px] rou relative w-100'>
            <input className='p-4 rou rounded-full py-2 px-4 w-full pr-10' type='text' placeholder='Job Title,Keywords' />
            <button className=''></button>
            <AiOutlineSearch />
          </div>

          <div className='row'>
            <div className='col-6'>
              <select className="rou rounded-lg py-2 px-4 w-full" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Industry Type</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Software Quality Engineering">Software Quality Engineering</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Product Manager">Product Manager</option>
              </select>
            </div>
          </div>
          <Link to="/Joblisting" className="background">Search</Link>
        </div>
      </form>
    </div>
    </>
  )
}

export default Searchbar;