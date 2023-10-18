import React from 'react'
import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <div className='py-10'>
      <div className="container mx-auto px-3 text-gray-400">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="text-center">
            <SocialLinks/>
          </div>
          <div className='text-primary md:text-xl space-x-10 text-center'>
            <a href="tel:+12345698465" className='hover:underline inline-flex space-x-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-7 md:h-7" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
              <span>123-4569-8465</span>
            </a>
            <a href="mailto:info@mail.com" className='hover:underline inline-flex space-x-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-7 md:h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
              <span>info@mail.com</span>
            </a>
          </div>
        </div>
        <hr className='my-10 border-gray-600' />
        <div className='flex justify-between md:flex-row flex-col'>
          <p className='text-center md:text-left'>Copyright &copy; 2023 Theja Rio | All Rights Reserved</p>
          <p className='text-center md:text-right'>NK Square</p>
        </div>
      </div>
    </div>
  )
}

export default Footer