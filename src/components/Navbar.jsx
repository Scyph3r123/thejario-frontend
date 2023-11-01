import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = ({clickHandler, menuActive}) => {
  function handleClickHandler() {
    clickHandler(false)
  }
  return (
    <div className='fixed w-full top-0 left-0 z-50 py-3 md:py-5 h-[100px]'>
      <div className="container mx-auto px-3">
        <div className="flex justify-between items-center">
          <Link to={'/'}><img src={logo} alt="logo" className='w-[50px] '/></Link>
          <button type='button' className='p-2' onClick={handleClickHandler}>
            <AnimatePresence>
            {menuActive
              ?
              <motion.svg
              mode='sync'
              animate={{opacity: 1, rotateZ: 90}}
              xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" width="52" height="52" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></motion.svg>
              :
              <motion.svg
              mode='sync'
              animate={{opacity: 1, rotateZ: 180}}
              xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" width="52" height="52" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8l16 0" /><path d="M4 16l16 0" /></motion.svg>
            }
            </AnimatePresence>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar