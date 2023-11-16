import React, { useRef } from 'react'
import Featured from '../components/Featured'
import About from '../components/About'
import Welcome from '../components/Welcome'
import { gql, useQuery } from '@apollo/client'
import { motion } from 'framer-motion'
import transition from '../transition'

const FETCHDATA = gql`
  query getData{
    projects(sort: "createdAt:desc"){
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
  
  const { loading, error, data } = useQuery(FETCHDATA)
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const latestProject = data.projects.data[0];

  return (
    <>
        <Welcome data={data} scrollToStart={scrollToStart} />
        <Featured latestProject={latestProject} startSection={startSection}/>
        <About data={data}/>
    </>
  )
}

export default transition(Home)