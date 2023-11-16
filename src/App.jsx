import React, { useEffect, useState, lazy } from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import basePath from './assets/basepath'
import { AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet'

//apollo client
const client = new ApolloClient({
  uri: `${basePath}/graphql`,
  cache: new InMemoryCache(),
})

const Footer = lazy(() => import ("./components/Footer"))
const Navbar = lazy(() => import ("./components/navbar"))
const Menu = lazy(() => import ("./components/Menu"))
const Home = lazy(() => import ("./pages/Home"))
const Projects = lazy(() => import ("./pages/Projects"))
const SingleProject = lazy(() => import ("./pages/SingleProject"))

function App() {
  const location = useLocation()
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({top:0})
  },[pathname])

  const [menuActive, setMenuActive] = useState(false)
  function clickHandler() {
    if (menuActive){
      setMenuActive(false)
    } else {
      setMenuActive(true)
    }
  }
  function closeMenu(){
    setMenuActive(false)
  }
  
  return (
    <ApolloProvider client={client}>
      <Helmet>
        <title>Theja Rio</title>
        <meta name="description" content="Theja Rio is a writer/director based in London. His work has been screened in multiple Oscar-qualifying and BAFTA-qualifying film festivals around the world." />
        <meta name="keywords" content="Writer, Director, Nagaland, Short Films, Film festivals, Portfolio, Films" />
      </Helmet>
      <Navbar clickHandler={clickHandler} menuActive={menuActive}/>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home/>} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/projects/:id" element={<SingleProject/>} />
        </Routes>
      </AnimatePresence>
      <Menu key='menuModal' closeMenu={closeMenu} menuActive={menuActive}/>
      <Footer/>
    </ApolloProvider>
  )
}

export default App
