import React, { useState } from "react";
import Navbar from "./Navbar";
import SocialSignIn from "./SocialSignIn";
import { Link, animateScroll as scroll } from "react-scroll";

const Landing = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <section className='relative w-full bg-hero-pattern'>
        <div className='absolute inset-0 w-full h-full bg-gray-900 opacity-50' />
        <nav className='max-w-6xl mx-auto relative flex items-center justify-between w-full h-20 px-8'>
          <img
            className='w-10'
            src='images/gradient-logo.png'
            alt='Sharan Logo'
          />
          <div className='flex flex-row justify-center items-center space-x-8'>
            <a
              href='#'
              className='relative text-lg font-medium tracking-wide transition duration-150 ease-out md:text-sm text-white hover:text-indigo-200'>
              <span className='block'>About</span>
            </a>
            <a
              href='#'
              className='relative text-lg font-medium tracking-wide transition duration-150 ease-out md:text-sm text-white hover:text-indigo-200'>
              <span className='block'>Download</span>
            </a>
          </div>
        </nav>
        <div className='relative z-10 max-w-6xl px-10 py-40 mx-auto'>
          <div className='flex flex-col items-center h-full lg:flex-row'>
            <div className='flex flex-col items-center justify-center w-full h-full lg:w-2/3 lg:items-start'>
              <p className='inline-block w-auto px-3 py-1 mb-5 text-xs font-medium text-white uppercase bg-indigo-600 rounded-full bg-gradient-to-br'>
                New features released
              </p>
              <h1 className='font-extrabold tracking-tight text-center text-white text-4xl md:text-7xl lg:text-left xl:pr-32'>
                Helping refugees{" "}
                <span className='text-indigo-200'>resettle.</span>
              </h1>
              <p className='font-poppins text-white font-bold text-md lg:text-lg mt-8 text-center lg:text-left'>
                Using artificial intelligence, Sharan helps refugees plan out a
                future away from their past, simplifying processes such as
                registering, finding places to live, jobs managing identity
                cards and more.
              </p>
              <div className='flex flex-row items-center justify-start mt-6'>
                <Link
                  className='item-link'
                  activeClass='active'
                  to='features'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  <a
                    target='_blank'
                    className='font-poppins cursor-pointer flex items-center justify-center w-full pl-4 pr-6 py-3 mb-3 text-lg text-white bg-indigo-600 hover:bg-indigo-500 rounded-md sm:mb-0 transition-colors duration-150 sm:w-auto'>
                    <svg
                      className='h-6 w-6 text-white mr-1'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {open && <SocialSignIn setOpen={setOpen} />}
      </section>
    </React.Fragment>
  );
};

export default Landing;
