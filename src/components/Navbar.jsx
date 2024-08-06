import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar flex justify-between'>
          <h1 className='m-8 text-3xl text-slate-600'>
                    <a href=""><span class="fa-solid fa-code"> </span><span> Om Kottewar</span></a>
                </h1>
     <ul className='flex gap-x-6 m-8' >         
              
                <li>
                    <a href="#project">Projects</a>
                </li>
                <li>
                    <a href="./about.html">About</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href=""><span class="fa-brands fa-linkedin" aria-hidden="true"></span><span class="sr-only">Linkedin</span></a>
                </li>
                <li>
                    <a href=""><span class="fa-brands fa-square-github"></span><span class="sr-only">Github</span></a>
                </li>
                <li>
                        <a class="btn" href="">Resume</a>
                </li>
            </ul>
        
    </nav>
  )
}

export default Navbar