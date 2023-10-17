import React, { useEffect, useRef } from 'react'
import featured from '../assets/featured-1.jpg'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
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


  return (
    <div className='min-h-screen flex flex-col py-20 relative z-20' ref={startSection}>
        <div className="container mx-auto px-3 mb-16">
          <div className="flex md:flex-row flex-col md:space-y-0 gap-5" ref={textRef}>
            <div className="md:w-1/3">
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
            <div className="md:w-1/2">
              <motion.h3
              style={{
                opacity: textIsInView ? 1 : 0,
                transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
              }}
              className='text-[94px] md:text-[150px] leading-none mb-8 md:mb-16 tracking-tight'>Project name</motion.h3>
              <motion.p
              style={{
                opacity: textIsInView ? 1 : 0,
                transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
              }}
              className='text-xl only:md:text-2xl font-semibold leading-relaxed text-gray-300'>Project Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus inventore maiores earum voluptatibus dolorum ipsam, quisquam possimus quos consequatur at harum molestias reprehenderit, repellat quas, quod rem officia repudiandae?</motion.p>
            </div>
          </div>
        </div>
        <motion.div ref={ref} className="relative overflow-hidden">
          <div className="md:w-1/2 mx-auto relative z-10">
            <img src={featured} alt="featured project" className='mb-5 shadow-xl' />
          </div>
          <motion.div
          style={{
            transform: isInView ? "translateY(0)" : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          className="w-screen absolute h-[80px] bg-primary top-1/2 z-0 left-0"></motion.div>
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