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
    <header className='top-0 z-40 bg-white font-display fixed w-full left-0'>
      <div className='w-full max-w-screen-lg xl:max-w-screen-xl mx-auto px-0 lg:px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center md:h-20 w-full border-b border-gray-200 px-4 lg:px-0'>
          <div className='flex justify-between items-center w-full h-16 md:h-20'>
            <div className='font-bold text-gray-800 text-2xl md:text-3xl tracking-tight'>
              <NavHashLink smooth to='/#home' onClick={() => setClosed(true)}>
                Ray Karyshyn
              </NavHashLink>
            </div>

            <button className='block md:hidden' onClick={() => setClosed(!closed)}>
              <svg width="35" height="35">
                <g className={["stroke-current fill-current text-gray-600 transform origin-center", !closed ? '-rotate-180' : ''].join(' ')} style={{ transition: 'transform 500ms ease-in-out' }}>
                  <circle cx="12" cy="12" r={!closed ? '2' : '2.5'} strokeWidth="0"></circle>
                  <circle cx="24" cy="12" r={!closed ? '2' : '2.5'} strokeWidth="0"></circle>
                  <circle cx="12" cy="24" r={!closed ? '2' : '2.5'} strokeWidth="0"></circle>
                  <circle cx="24" cy="24" r={!closed ? '2' : '2.5'} strokeWidth="0"></circle>
                  <g>
                    <path d="M 12 12 L 24 24" strokeWidth="4" strokeLinecap="round" className={!closed ? '' : 'hidden'}></path>
                    <path d="M 24 12 L 12 24" strokeWidth="4" strokeLinecap="round" className={!closed ? '' : 'hidden'}></path>
                    <path d="M 24 24 L 12 12" strokeWidth="4" strokeLinecap="round" className={!closed ? '' : 'hidden'}></path>
                    <path d="M 12 24 L 24 12" strokeWidth="4" strokeLinecap="round" className={!closed ? '' : 'hidden'}></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <Dropdown closed={closed} transitionOnAppear={false} className='md:hidden w-full' style={{ transitionDuration: 500, transitionTimingFunction: 'ease-in-out' }}>
            <nav className='flex items-center text-gray-500 font-medium pt-4 xs:pt-2 pb-7 xs:pb-4 flex-col xs:flex-row justify-center'>
              <div className='flex flex-col 2xs:flex-row items-center mb-3 xs:mb-0 w-full justify-center xs:w-auto'>
                <div className='flex justify-center w-full 2xs:w-auto'>
                  <NavHashLink smooth to='/#home' className='text-center w-2/5 mx-2 2xs:mx-5 2xs:mx-3 2xl:mr-3 mb-4 2xs:mb-1 xs:mb-0 hovtap:hover:text-red-500 transition-colors duration-200' onClick={() => setClosed(true)}>
                    Home
                  </NavHashLink>
                  <NavHashLink smooth to='/#about' className='text-center w-2/5 mx-2 2xs:mx-5 2xs:mx-3 mb-4 2xs:mb-1 xs:mb-0 hovtap:hover:text-red-500 transition-colors duration-200' onClick={() => setClosed(true)}>
                    About
                  </NavHashLink>
                </div>
                <div className='flex justify-center w-full 2xs:w-auto'>
                  <NavHashLink smooth to='/#projects' className='text-center w-2/5 mx-2 2xs:mx-5 2xs:mx-3 mb-2 2xs:mb-1 xs:mb-0 hovtap:hover:text-red-500 transition-colors duration-200' onClick={() => setClosed(true)}>
                    Projects
                  </NavHashLink>
                  <NavHashLink smooth to='/#contact' className='text-center w-2/5 mx-2 2xs:mx-5 2xs:mx-3 mb-2 2xs:mb-1 xs:mb-0 hovtap:hover:text-red-500 transition-colors duration-200' onClick={() => setClosed(true)}>
                    Contact
                  </NavHashLink>
                </div>
              </div>
              <a href={process.env.PUBLIC_URL + '/resume.pdf'} target='_blank' rel='noreferrer' className='mx-3 xs:mx-4 whitespace-nowrap inline-flex items-center justify-center px-7 py-1 xs:px-4 xs:py-2 rounded-md shadow-sm bg-red-white border border-gray-200 hovtap:hover:text-red-500 hovtap:hover:border-red-200 hovtap:hover:bg-red-50 transition-colors duration-200'>
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
            <a href={process.env.PUBLIC_URL + '/resume.pdf'} target='_blank' rel='noreferrer' className='ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm bg-red-white border border-gray-200 hovtap:hover:text-red-500 hovtap:hover:border-red-200 hovtap:hover:bg-red-50 transition-colors duration-200'>
              Resume
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
