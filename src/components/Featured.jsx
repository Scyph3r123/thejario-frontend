import React, { useEffect, useRef } from 'react'
import featured from '../assets/featured-1.jpg'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { gql, useQuery } from '@apollo/client'

// const featuredProject = gql`
//   query GetProjects {
//     projects {
//       data {
//         id
//         attributes {
//           images {
//             data {
//               id,
//               attributes {
//                 url
//                 formats
//               }
//             }
//           }
//           title,
//           description,
//         }
//       }
//     }
//   }
// `
const Featured = ({startSection}) => {

  const ref = useRef(null)
  const textRef = useRef(null)
  const textIsInView = useInView(textRef, {
    once: true,
    margin: '150px 0px -150px 0px'
  })
  const isInView = useInView(ref, {
    once: true,
    margin: '150px 0px -150px 0px'
  })



  
  // const { loading, error, data } = useQuery(featuredProject)

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error :(</p>
  
  const movingBar = useRef(null)
  const { scrollYProgress } = useScroll({
    target: movingBar,
    offset: ['start start','end end']
  })
  const scrollingBar = useTransform(scrollYProgress, [1, 0], ['0%', '-10%'])

  return (
    <div className='min-h-screen flex flex-col py-20 relative z-20' ref={startSection}>
        <div className="container mx-auto px-3 mb-16">
          <div className="grid lg:grid-cols-4 md:space-y-0 gap-5" ref={textRef}>
            <div className="md:col-span-1">
              <motion.h2
              style={{
                transform: textIsInView ? "translateX(0)" : 'translateX(-200px)',
                opacity: textIsInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.15s"
              }}
              className='text-primary uppercase tracking-widest flex space-x-2 items-center'><span>Featured project</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" width="52" height="52" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 15l3 -3l-3 -3" /><path d="M3 12h18" /><path d="M3 9v6" /></svg>
              </motion.h2>
            </div>
            <div className="md:col-span-2 lg:col-span-2">
              <motion.div
              style={{
                opacity: textIsInView ? 1 : 0,
                transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
              }}>
                <h3 className='text-[80px] md:text-[100px] lg:text-[120px] leading-none mb-8 md:mb-16 tracking-tight'>Project name</h3>
              </motion.div>
              <motion.div
              style={{
                opacity: textIsInView ? 1 : 0,
                transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
              }}>
                <p className='text-xl md:text-2xl font-semibold leading-relaxed text-gray-300'>Project Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus inventore maiores earum voluptatibus dolorum ipsam, quisquam possimus quos consequatur at harum molestias reprehenderit, repellat quas, quod rem officia repudiandae?</p>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div ref={ref} className="relative overflow-hidden">
          <div className="container mx-auto px-3">
            <div className="sm:w-2/3 mx-auto relative z-10">
              <img src={featured} alt="featured project" className='mb-5 shadow-heavy' />
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
        </motion.div>
        <div className="container mx-auto px-3">
          <div className="text-center">
            <Link to={'/projects'} className='tr-link'>
              <span>Explore more projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.2em] h-[1.2em]" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Featured