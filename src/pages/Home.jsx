import React, { useRef } from 'react'
import Featured from '../components/Featured'
import About from '../components/About'
import Welcome from '../components/Welcome'
import { gql, useQuery } from '@apollo/client'

const FETCHDATA = gql`
  query getData($projectId: ID) {
    project(id: $projectId){
      data {
        id
        attributes {
          title
          featured
          description
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
    about {
      data {
        attributes {
          Title
          description
          profile_picture {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

const Home = () => {
  const startSection = useRef(null)
  function scrollToStart() {
    startSection.current.scrollIntoView({ behavior: "smooth" });
  }
  
  const { loading, error, data } = useQuery(FETCHDATA, {
    variables: { projectId: 7 }
  })
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  
  return (
    <>
        <Welcome data={data} scrollToStart={scrollToStart} />
        <Featured data={data} startSection={startSection}/>
        <About data={data}/>
    </>
  )
}

export default Home