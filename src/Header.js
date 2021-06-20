import * as React from 'react'
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header className='-mx-4 lg:mx-0 px-4 lg:px-0 sticky top-0 z-40 bg-white border-b border-gray-200 font-display dark:bg-gray-900 dark:border-gray-700'>
      <div className='flex justify-between items-center h-16 md:h-20'>
        <div className='font-bold text-gray-800 text-2xl md:text-3xl tracking-tight dark:text-gray-300'>
          <NavHashLink smooth to='/#home'>
            Ray Karyshyn
          </NavHashLink>
        </div>

        <nav className='flex items-center text-gray-500 dark:text-gray-400 font-medium hidden md:block'>
          <NavHashLink smooth to='/#home' className='mx-2 px-2 hovtap:hover:text-red-500 transition-colors duration-200'>
            Home
          </NavHashLink>
          <NavHashLink smooth to='/#about' className='mx-2 px-2 hovtap:hover:text-red-500 transition-colors duration-200'>
            About
          </NavHashLink>
          <NavHashLink smooth to='/#projects' className='mx-2 px-2 hovtap:hover:text-red-500 transition-colors duration-200'>
            Projects
          </NavHashLink>
          <NavHashLink smooth to='/#contact' className='mx-2 px-2 hovtap:hover:text-red-500 transition-colors duration-200'>
            Contact
          </NavHashLink>
          <a href={process.env.PUBLIC_URL + '/resume.pdf'} target='_blank' rel='noreferrer' className='ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm bg-red-white border border-gray-200 hovtap:hover:text-red-500 hovtap:hover:border-red-400 hovtap:hover:bg-red-50 transition-colors duration-200 dark:border-gray-700 hovtap:dark:hover:bg-gray-800 hovtap:dark:hover:text-red-500 hovtap:dark:hover:border-red-800'>
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
