import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className='nav-bar flex justify-between items-center py-4 bg-[#1a1d23] text-[#ffffff]'>
      <div className='nav-title ml-4 font-bold text-2xl'>My Website</div>
      <ul className='nav-links flex justify-end items-center mr-4'>
        <li className='mx-2'><Link to='#about' className='text-[#ffffff] hover:text-[#66d9ef]'>About</Link></li>
        <li className='mx-2'><Link to='#contact' className='text-[#ffffff] hover:text-[#66d9ef]'>Contact</Link></li>
        <li className='mx-2'><Link to='#services' className='text-[#ffffff] hover:text-[#66d9ef]'>Services</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;