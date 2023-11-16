import logo from '../assets/logo.svg'
import { motion } from 'framer-motion'

const Loading = () => {
    return (
        <motion.div
            key='loader'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='bg-black fixed w-full h-full z-[100] flex'
        >
            <img src={logo} alt="logo" className='m-auto w-[120px]'/>
        </motion.div>
    )
}

export default Loading