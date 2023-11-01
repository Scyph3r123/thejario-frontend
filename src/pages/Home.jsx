import React, { useRef } from 'react'
import profile from '../assets/profile.jpg'
import Featured from '../components/Featured'
import {delay, motion, stagger, useScroll, useTransform} from 'framer-motion'
import About from '../components/About'

const iconMotion = {
  rest: {
    x: 0,
    transition: {
      duration: 2,
      type: "tween",
      ease: "easeIn"
    }
  },
  hover: {
    scaleY: [1, 1.2, 1],
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut"
    }
  }
}

const Home = () => {

  const startSection = useRef(null)
  function scrollToStart() {
    startSection.current.scrollIntoView({ behavior: "smooth" });
  }

  const banner = useRef(null)
  const { scrollYProgress } = useScroll({
    target: banner,
    offset: ['start start', 'end start']
  })
  const bannerImg = useTransform(scrollYProgress, [0, 1.5], ['0%', '100%'])
  const bannerText = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])
  const scrollOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <>
        <div className='min-h-screen flex relative z-10' ref={banner}>
            <motion.img
            style={{y: bannerImg}}
            animate={{y: ['-50%', '0%'], transition:{duration: 1}}}
            src={profile} alt="Theja Rio" className=' pointer-events-none absolute z-0 w-[400px] -ml-[200px] md:w-[500px] left-1/2 md:-ml-[250px] top-1/2 -mt-[300px] md:-mt-[375px]' />
            <motion.div
            style={{opacity: scrollOpacity, y: bannerText}}
            className="m-auto uppercase leading-tight text-center z-10">
                <div className="font-light text-[36px] md:text-[40px] lg:text-[46px] xl:text-[50px] leading-none">I'm</div>
                <div className="font-thin text-[130px] md:text-[150px] lg:text[170px] xl:text-[200px] text-primary leading-none">
                  <span className='overflow-hidden block'>
                    <motion.span
                    className='inline-block font-title'
                    animate={{y: ['100%','0%'], transition:{duration: 1}}}
                    >Theja Rio</motion.span>
                  </span>
                </div>
                <p className='text-[18px] md:text-[20px] lg:text-[20px] xl:text-[26px] opacity-80 leading-none mb-5'>i am a writer/director based in London</p>
                <motion.button
                whileHover='hover'
                type='button' className='w-16 h-16 md:w-24 md:h-24 inline-flex items-center justify-center bg-gray-700 hover:bg-primary transition-all hover:text-black' onClick={scrollToStart}>
                    <motion.svg
                    style={{transformOrigin: 'top'}}
                    variants={iconMotion}
                    xmlns="http://www.w3.org/2000/svg" className="" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M18 13l-6 6" /><path d="M6 13l6 6" /></motion.svg>
                </motion.button>
            </motion.div>
        </div>
        <Featured startSection={startSection}/>
        <About/>
    </>
  )
}

export default Home