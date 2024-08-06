import { ArrowDropDown } from '@mui/icons-material'
import { Accordion } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const SideBar = () => {
  const options = [1,2,3]
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    // onSelect(selectedValue);
  };
  return (


    <div className="bg-gray-700 m-5 mt-0">
    <h1 className='m-8 text-3xl text-slate-600 items-center text-center text-6xl '>
                    <a href=""><span class="fa-solid fa-code text-blue-500"> </span></a>
                </h1>
    
    <ul className='ml-8 p-5 '>
        <li className=' flex items-center gap-2'><i class="fa-regular fa-user"></i><span>Profile</span></li>
        <li>Blog</li>
        <li className='mt-5'>
          Dsa Sheets
          </li>
    </ul>
    </div>
  )
}

export default SideBar