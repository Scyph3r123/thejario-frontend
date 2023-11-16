import React from 'react'
import SocialLinks from './SocialLinks'
import { gql, useQuery } from '@apollo/client'
import Error from './Error'

const CONTACT = gql`
  query {
    contact {
      data {
        attributes {
          email
        }
      }
    }
  }
`
const Footer = () => {

  const { loading, error, data } = useQuery(CONTACT)
  if (loading) return <p>Loading...</p>
  if (error) return <Error/>

  return (
    <div className='py-10'>
      <div className="container mx-auto px-3 text-gray-500">
        <div className="grid md:grid-cols-2 gap-5">
          <SocialLinks className="justify-center md:justify-start"/>
          <div className='text-primary md:text-xl text-center md:text-right'>
            <a href={`mailto:${data.contact.data.attributes.email}`} className='hover:underline inline-flex space-x-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-7 md:h-7" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
              <span>{data.contact.data.attributes.email}</span>
            </a>
          </div>
        </div>
        <hr className='my-10 border-gray-700' />
        <div className='flex justify-between md:flex-row flex-col text-xs'>
          <p className='text-center md:text-left'>Copyright &copy; 2023 Theja Rio | All Rights Reserved</p>
          <p className='text-center md:text-right'><a href="https://nksquare.co.in" target='_blank'>NK Square</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer