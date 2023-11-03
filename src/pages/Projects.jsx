import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { register } from 'swiper/element/bundle';
import { Link } from 'react-router-dom'
register();

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
      <div className='min-h-[70vh] flex mb-10 py-20'>
        <div className="container m-auto px-3">
          <div className="md:w-2/3 lg:w-1/2 mx-auto text-center">
            <h1 className='text-[70px] md:text-[100px] lg:text-[130px] leading-none mb-8 md:mb-16 tracking-tight'>Projects</h1>
            <p className='font-medium leading-relaxed text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel quibusdam delectus sit neque nihil officiis dolor magni molestias suscipit laboriosam, fuga dolores, ratione facere quasi impedit odio debitis quam.</p>
          </div>
        </div>
      </div>
      <div className="pb-20">
        <div className="container mx-auto">
          <div className="md:w-2/3 mx-auto">
            <swiper-container slides-per-view="1" speed="1000" space-between="30px" autoplay="true"  navigation="true">
              {data.projects.data.map(project => (
                <swiper-slide key={project.id}>
                  <div className="flex flex-col lg:flex-row gap-10 items-center relative">
                    <img className='h-[720px]' src={`http://localhost:1337${project.attributes.featured_image.data?.attributes.formats.medium.url}`} alt="" />
                    <div className='absolute lg:relative bottom-0 left-0 p-6 bg-black bg-opacity-60'>
                      <h3 className='mb-5 text-[40px] leading-[50px] lg:text-[100px] lg:leading-[100px]'>{project.attributes.title}</h3>
                      <p className='mb-5 lg:text-xl'>{project.attributes.description.slice(0, 250)}...</p>
                      <Link to={`/projects/${project.id}`} className='text-primary font-medium inline-flex items-center'>
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-7 h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                      </Link>
                    </div>
                  </div>
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects