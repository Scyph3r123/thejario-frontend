import React from 'react'
import featured from '../assets/featured-1.jpg'
import { gql, useQuery } from '@apollo/client'

// const projects = gql`
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
//           featured,
//           description,
//         }
//       }
//     }
//   }
// `

const Projects = () => {
  // const { loading, error, data } = useQuery(projects)

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error :(</p>
  
  return (
    <>
      <div className='min-h-screen flex mb-10'>
        <div className="container m-auto px-3">
          <div className="w-1/2 mx-auto text-center">
            <h1 className='text-[94px] md:text-[150px] leading-none mb-8 md:mb-16 tracking-tight'>Projects</h1>
            <p className='font-medium leading-relaxed text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel quibusdam delectus sit neque nihil officiis dolor magni molestias suscipit laboriosam, fuga dolores, ratione facere quasi impedit odio debitis quam.</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-3">
        <ul className='list-none space-y-40'>
          {/* {data.projects.data.map(project => (
            <li key={project.id}>
              <p className='font-bold mb-5'>{project.attributes.title}</p>
              <ul className='list-none grid md:grid-cols-3 gap-2'>
                {project.attributes.images.data.map(image => (
                    <li key={image.id}>
                      <img className='w-full' src={`http://localhost:1337${image.attributes.formats.medium.url}`} alt="project images" />
                    </li>
                ))}
              </ul>
            </li>
          ))} */}
        </ul>
      </div>
    </>
  )
}

export default Projects