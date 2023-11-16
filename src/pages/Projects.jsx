import { gql, useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import basePath from '../assets/basepath'
import { motion } from 'framer-motion';
//Swiper Scripts
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Swiper Styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import transition from '../transition'
import { Helmet } from 'react-helmet';

const PROJECTS = gql`
  query GetProjects {
    projects {
      data {
        id
        attributes {
          title
          description
          featured
          featured_image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`
const Projects = () => {

  const { loading, error, data } = useQuery(PROJECTS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  
  return (
    <>
      <Helmet>
        <title>Theja Rio Projects</title>
        <meta name="description" content="Welcome to Theja Rio's projects page. Browse through a list of projects successfully undertaken and completed by Theja Rio." />
        <meta name="keywords" content="Writer, Director, Nagaland, Short Films, Film festivals, Portfolio, Films" />
      </Helmet>
      <div
        key='projects'
        initial={{ opacity: 0, transition:{ duration: 2 } }}
        animate={{ opacity: 1, transition:{ duration: 2 } }}
        exit={{ opacity: 0, transition:{ duration: 2 } }}
        className='min-h-[70vh] flex mb-10 py-20'
      >
        <div className="container m-auto px-3">
          <div className="md:w-2/3 lg:w-1/2 mx-auto text-center">
            <motion.div
            animate={{ opacity: [0, 1], y: [120 , 1]}}
            transition={{ duration: 1 }}
             className='text-primary uppercase tracking-widest mb-5'>Projects</motion.div>
            <motion.h1
            animate={{ opacity: [0, 1], y: [120 , 1]}}
            transition={{ duration: 1, delay: 0.1 }}
            className='text-[70px] md:text-[100px] lg:text-[130px] leading-none mb-8 md:mb-8 tracking-tight'>Short Films</motion.h1>
            <motion.p
            animate={{ opacity: [0, 1], y: [120 , 1]}}
            transition={{ duration: 1, delay: 0.2 }}
            className='font-light leading-relaxed text-xl text-gray-300'>Hey there! I'm thrilled to have you here, exploring the culmination of my passion and hard work over the years. This project page is a glimpse into the various adventures I've embarked upon, each one a unique journey in its own right.</motion.p>
          </div>
        </div>
      </div>
      <div className="pb-20 overflow-hidden">
        <div className="container mx-auto">
          <div className="xl:w-2/3 mx-auto">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              speed={500}
              navigation
              pagination={{ clickable: true }}
              className='pb-20'
            >
              {data.projects.data.map(project => (
                <SwiperSlide key={project.id}>
                  {({ isActive }) => (
                    <motion.div
                    className="flex flex-col lg:flex-row gap-5 items-center">
                      <img className='md:h-[720px]' src={`${basePath}${project.attributes.featured_image.data?.attributes.formats.medium.url}`} alt={`${project.attributes.title} cover`} />
                      <div className='lg:relative bottom-full left-0 p-6 bg-black bg-opacity-60'>
                        <motion.h3
                        animate={{opacity: isActive ? 1 : 0, y: isActive ? 0 : 50}}
                        transition={{ easing: 'ease-out', duration: 0.5, delay: 0.1}}
                        className='mb-5 text-[40px] leading-[50px] lg:text-[70px] lg:leading-[70px]'>{project.attributes.title}</motion.h3>
                        <motion.p
                        animate={{opacity: isActive ? 1 : 0, y: isActive ? 0 : 50}}
                        transition={{ easing: 'ease-out', duration: 0.5, delay: 0.2}}
                        className='mb-5 lg:text-xl'>{project.attributes.description?.slice(0, 250)}...</motion.p>
                        <motion.div
                        animate={{opacity: isActive ? 1 : 0, y: isActive ? 0 : 50}}
                        transition={{ easing: 'ease-out', duration: 0.5, delay: 0.2}}
                        >
                          <Link to={`/projects/${project.id}`} className='text-primary font-medium inline-flex items-center'>
                            Read more
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-7 h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}
export default transition(Projects)