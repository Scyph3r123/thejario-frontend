import { motion } from 'framer-motion'
import Markdown from 'react-markdown'


const About = ({data}) => {

    return (
        <div className='min-h-screen flex py-20'>
            <div className="container m-auto px-3">
                <div className="flex md:flex-row flex-col mb-10 md:space-y-0 gap-5">
                    <div className="md:w-1/3">
                        <motion.h2
                        className='text-primary uppercase tracking-widest flex space-x-2 items-center'>
                            <span>{data.about.data?.attributes.Title}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" width="52" height="52" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 15l3 -3l-3 -3" /><path d="M3 12h18" /><path d="M3 9v6" /></svg>
                        </motion.h2>
                    </div>
                    <motion.div
                    className="md:w-1/2 space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed">
                        <Markdown>
                            {data.about.data ? 
                                data.about.data.attributes.description : 'no data found'
                            }
                        </Markdown>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About