import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './Searchbar.css';
import { useState } from 'react';
// import { IoEllipsisVertical } from 'react-icons/io5';
import './Joblisting.css';



export const Joblisting = () => {
    const [role, setRole] = useState('');
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='searchDiv grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]'>
                    <form action="">
                        <div className='firstDiv flex justify-between items-center rounded-[80px] gap-[10px] bg-white p-5 shadow-grey-700 w-[100%] h-200'>
                            <div className='flex gap-1 items-center justify-center margin:auto rounded-[70px] rou'>
                                <input className='rou w-[100px]' type='text' placeholder='Job Title,Keywords' />
                                <AiOutlineSearch className='text-[25px] icon' />
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <select className="rou" value={role} onChange={(e) => setRole(e.target.value)}>
                                        <option value="">Industry Type</option>
                                        <option value="Software Engineer">Software Engineer</option>
                                        <option value="Web Developer">Web Developer</option>
                                        <option value="Software Quality Engineering">Software Quality Engineering</option>
                                        <option value="Data Scientist">Data Scientist</option>
                                        <option value="Product Manager">Product Manager</option>
                                    </select>
                                </div>
                            </div>
                            <button className='background'>Search</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                    <div className='group group/item singleJob w-64 p-5 bg-white-500 rounded-lg shadow-right-bottom hover:shadow-right-bottom-md'>
                        <span className='flex justify-between items-center gap-4'>
                            <h1 className='text-[16px] font-semibold text-textColor
       group-hover:text-black'>Web Developer</h1>
                            <span>
                                <IoEllipsisVertical />
                            </span>
                        </span>
                        <h6 className='text-[#ccc]'>Synapse Consulting</h6>
                        <h6 className='text-[#ccc]'>Karachi</h6>
                        <button className='background flex items-center justify-center bg-#004a98-400
         hover:bg-gray-600 text-white rounded-full px-2 py-1  text-center'>Apply now</button>

                    </div>
                </div>

                <br></br>
                <br></br>

                <div className="flex flex-col justify-center items-center">
                    <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                        <div className='group group/item singleJob w-64 p-5 bg-white-500 rounded-lg shadow-right-bottom hover:shadow-right-bottom-md'>
                            <span className='flex justify-between items-center gap-4'>
                                <h1 className='text-[16px] font-semibold text-textColor
       group-hover:text-black'>Frontend Developer</h1>
                                <span>
                                    <IoEllipsisVertical />
                                </span>
                            </span>
                            <h6 className='text-[#ccc]'>Lime Software</h6>
                            <h6 className='text-[#ccc]'>Karachi</h6>
                            <button className='background flex items-center justify-center bg-#004a98-400
         hover:bg-gray-600 text-white rounded-full px-2 py-1  text-center'>Apply now</button>

                        </div>
                    </div>
                </div>



                <div className="flex flex-col justify-center items-center">
                    <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                        <div className='group group/item singleJob w-64 p-5 bg-white-500 rounded-lg shadow-right-bottom hover:shadow-right-bottom-md'>
                            <span className='flex justify-between items-center gap-4'>
                                <h1 className='text-[16px] font-semibold text-textColor
       group-hover:text-black'>Web Developer</h1>
                                <span>
                                    <IoEllipsisVertical />
                                </span>
                            </span>
                            <h6 className='text-[#ccc]'>Gaditek</h6>
                            <h6 className='text-[#ccc]'>Karachi</h6>
                            <button className='background flex items-center justify-center bg-#004a98-400
         hover:bg-gray-600 text-white rounded-full px-2 py-1  text-center'>Apply now</button>

                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                        <div className='group group/item singleJob w-64 p-5 bg-white-500 rounded-lg shadow-right-bottom hover:shadow-right-bottom-md'>
                            <span className='flex justify-between items-center gap-4'>
                                <h1 className='text-[16px] font-semibold text-textColor
       group-hover:text-black'>Backend Developer</h1>
                                <span>
                                    <IoEllipsisVertical />
                                </span>
                            </span>
                            <h6 className='text-[#ccc]'>Software House</h6>
                            <h6 className='text-[#ccc]'>Karachi</h6>
                            <button className='background flex items-center justify-center bg-#004a98-400
         hover:bg-gray-600 text-white rounded-full px-2 py-1  text-center'>Apply now</button>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                        <div className='group group/item singleJob w-64 p-5 bg-white-500 rounded-lg shadow-right-bottom hover:shadow-right-bottom-md'>
                            <span className='flex justify-between items-center gap-4'>
                                <h1 className='text-[16px] font-semibold text-textColor
       group-hover:text-black'>React Js Developer</h1>
                                <span>
                                    <IoEllipsisVertical />
                                </span>
                            </span>
                            <h6 className='text-[#ccc]'>Synapse Consulting</h6>
                            <h6 className='text-[#ccc]'>Karachi</h6>
                            <button className='background flex items-center justify-center bg-#004a98-400
         hover:bg-gray-600 text-white rounded-full px-2 py-1  text-center'>Apply now</button>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                        <div className='group group/item singleJob w-64 p-5 bg-white-500 rounded-lg shadow-right-bottom hover:shadow-right-bottom-md'>
                            <span className='flex justify-between items-center gap-4'>
                                <h1 className='text-[16px] font-semibold text-textColor
       group-hover:text-black'>React Js Developer</h1>
                                <span>
                                    <IoEllipsisVertical />
                                </span>
                            </span>
                            <h6 className='text-[#ccc]'>System Software </h6>
                            <h6 className='text-[#ccc]'>Karachi</h6>
                            <button className='background flex items-center justify-center bg-#004a98-400
         hover:bg-gray-600 text-white rounded-full px-2 py-1  text-center'>Apply now</button>

                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}


