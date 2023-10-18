import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gql, useQuery } from '@apollo/client'
import Markdown from 'react-markdown'

// const ABOUT = gql`
//     query GetAbout {
//         about {
//             data {
//                 attributes {
//                 Title
//                 description
//                 }
//             }
//         }
//     }
// `

const About = () => {

    const aboutRef = useRef(null)
    const aboutIsInView = useInView(aboutRef, {
        once: true,
        margin: '150px 0px -150px 0px'
    })

    // const { loading, error, data } = useQuery(ABOUT)
    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error :(</p>

    // console.log(data)

    return (
        <div className='min-h-screen flex py-20'>
            <div className="container m-auto px-3">
                <div className="flex md:flex-row flex-col mb-10 md:space-y-0 gap-5">
                    <div className="md:w-1/3" ref={aboutRef}>
                        <motion.h2
                        className='text-primary uppercase tracking-widest flex space-x-2 items-center'>
                            <span>About Theja Rio</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" width="52" height="52" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 15l3 -3l-3 -3" /><path d="M3 12h18" /><path d="M3 9v6" /></svg>
                        </motion.h2>
                    </div>
                    <motion.div
                    className="md:w-1/2 space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed font-medium">
                        <p>Theja Rio is a writer/director based in London. His work has been screened in multiple Oscar-qualifying and BAFTA-qualifying film festivals around the world.</p>
                        <p>His first short film was shot in Sicily, Italy(2015), where his script was chosen and invited. Under the mentorship of industry professionals such as Manuel Alberto Claro(DOP), his film was produced and played film festivals around Europe.</p>
                        <p>His short film Angh went on to play prestigious film festivals such as Clermont Ferrand and Palm Springs, and winning an award in Clermont. Angh has been taught in lectures in art galleries in France.</p>
                        <p>He has shot multiple short films in both 16mm film and 35mm film. Currently he is studying MA Directing Fiction at the National Film & Television School.</p>
                        <h2 className='text-4xl font-bold tracking-tight'>Awards</h2>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About