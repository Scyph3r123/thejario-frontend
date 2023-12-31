import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import basePath from '../assets/basepath'

const Featured = ({startSection, latestProject}) => {

  const movingBar = useRef(null)
  const { scrollYProgress } = useScroll({
    target: movingBar,
    offset: ['start start','end end']
  })
  const scrollingBar = useTransform(scrollYProgress, [1, 0], ['0%', '-10%'])

  return (
    <div className='min-h-screen flex flex-col py-20 relative z-20' ref={startSection}>
        
        <div className="relative overflow-hidden">
          <div className="container mx-auto px-3">
            <div className="xl:w-3/4 mx-auto relative z-10 flex flex-col lg:flex-row items-center">
              <img src={`${basePath}${latestProject.attributes.featured_image.data.attributes.formats.medium.url}`} alt={`${latestProject.attributes.title} poster`} className='mb-5 shadow-heavy w-[500px] inline-block' />
              
              <div className='md:max-w-[700px] bg-black bg-opacity-80 lg:p-10 p-6 lg:-ml-20 -mt-[200px] lg:mt-0'>
                <div className='text-primary uppercase tracking-widest mb-5'>Featured project</div>
                <h3 className='text-[50px] md:text-[70px] xl:text-[90px] leading-none mb-8 md:mb-10 tracking-tight'>{latestProject.attributes.title}</h3>
                <p className='text-xl md:text-xl font-semibold leading-relaxed text-gray-200 mb-10'>
                  {latestProject.attributes.description.slice(0, 250)}
                </p>
                <Link to={`/projects/${latestProject.id}`} className='text-primary p-3 inline-flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 m-auto" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                </Link>
              </div>
            </div>
          </div>
          <motion.div
          ref={movingBar}
          style={{
            x: scrollingBar,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)',
            backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, #00FFBB 20px, #00FFBB 40px)'
          }}
          className="w-[600vw] absolute h-[80px] top-1/2 z-0 left-0"></motion.div>
        </div>
        <div className="text-center mt-10">
          <Link to={'/projects'} className='tr-link'>
            <span>Explore more projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.2em] h-[1.2em]" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
          </Link>
        </div>
    </div>
  )
}

export default Featured