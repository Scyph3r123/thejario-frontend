import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/navbar"
import Menu from "./components/Menu"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import ErrorPage from './pages/ErrorPage'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

//apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
})

function App() {
  
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
    <>
      <ApolloProvider client={client}>
        <Navbar clickHandler={clickHandler} menuActive={menuActive}/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/thejario-frontend" element={<Home/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Menu key='menuModal' closeMenu={closeMenu} menuActive={menuActive}/>
        <Footer/>
      </ApolloProvider>
    </>
  )
}

export default App
