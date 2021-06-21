import * as React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import Dropdown from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const Header = () => {
  const [closed, setClosed] = React.useState(true);

  /* const func = () => {
    useEffect(() => setClosed(true))
  } */

  return (
    <header className='-mx-4 lg:mx-0 px-4 lg:px-0 top-0 z-40 bg-white border-b border-gray-200 font-display fixed w-full'>
      <div className='flex flex-col md:flex-row justify-between items-center md:h-20 w-full'>
        <div className='flex justify-between items-center w-full h-16 md:h-20'>
          <div className='font-bold text-gray-800 text-2xl md:text-3xl tracking-tight'>
            <NavHashLink smooth to='/#home'>
              Ray Karyshyn
            </NavHashLink>
          </div>

          <button className='block md:hidden' onClick={() => setClosed(!closed)}>
            ham
          </button>
        </div>

        <Dropdown closed={closed} transitionOnAppear={false} className='md:hidden'>
          <nav className='flex items-center text-gray-500 font-medium'>
            <NavHashLink smooth to='/#home' className='mx-2 px-2 hovtap:hover:text-red-500 transition-colors duration-200' onClick={() => setClosed(true)}>
              Home
            </NavHashLink>
            <NavHashLink smooth to='/#about' className='mx-2 px-2 hovtap:hover:text-red-500 transition-colors duration-200' onClick={() => setClosed(true)}>
              About
            </NavHashLink>
            <NavHashLink smooth to='/#projects' className='mx-2 px-2 hovtap:hover:text-red-500 transition-colors duration-200' onClick={() => setClosed(true)}>
              Projects
            </NavHashLink>
            <NavHashLink smooth to='/#contact' className='mx-2 px-2 hovtap:hover:text-red-500 transition-colors duration-200' onClick={() => setClosed(true)}>
              Contact
            </NavHashLink>
            <a href={process.env.PUBLIC_URL + '/resume.pdf'} target='_blank' rel='noreferrer' className='ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm bg-red-white border border-gray-200 hovtap:hover:text-red-500 hovtap:hover:border-red-200 hovtap:hover:bg-red-50 transition-colors duration-200'>
              Resume
            </a>
          </nav>
        </Dropdown>

        <nav className='items-center text-gray-500 font-medium hidden md:flex'>
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
          <a href={process.env.PUBLIC_URL + '/resume.pdf'} target='_blank' rel='noreferrer' className='ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm bg-red-white border border-gray-200 hovtap:hover:text-red-500 hovtap:hover:border-red-200 hovtap:hover:bg-red-50 transition-colors duration-200'>
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
