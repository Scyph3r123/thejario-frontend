import React from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'


const Menu = ({closeMenu, menuActive}) => {
    function handleCloseMenu() {
        closeMenu(false)
    }
    return (
        <AnimatePresence mode='wait'>
        {menuActive && 
            <motion.div
            mode="wait"
            initial={{ opacity: 0, y: '-100%'}}
            animate={{ opacity: 1, y: 0, transition: {ease: "easeOut", duration: 0.5}}}
            exit={{ opacity: 0, y: '-100%', transition: {delay: 0.05, duration: 0.5}}}
            className='fixed top-0 left-0 z-40 w-full h-full bg-black overflow-hidden text-center flex flex-col py-20'>
                <nav className='flex flex-col text-8xl space-y-2 font-extrabold tracking-tight leading-tight m-auto'>
                    <NavLink
                        onClick={handleCloseMenu}
                        to="/"
                        className={`({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        hover:text-primary transition-colors relative`}
                    >
                        <motion.div
                        transition={{ ease: "easeOut" }}
                        className="absolute bg-primary h-[5px]">
                        </motion.div>

                        <motion.div
                            style={{opacity: 0.6}}
                            whileHover={{ opacity: 1, scale: 1.2 }}
                            transition={{ duration: 0.15, type: "tween" }}
                        >
                            itsme
                        </motion.div>
                    </NavLink>
                    <NavLink
                        onClick={handleCloseMenu}
                        to="/projects"
                        className={`({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        hover:text-primary transition-colors`}
                    >
                        <motion.div
                            style={{opacity: 0.6}}
                            whileHover={{ opacity: 1, scale: 1.2 }}
                            transition={{ duration: 0.15, type: "tween" }}
                        >
                            projects
                        </motion.div>
                    </NavLink>
                </nav>
            </motion.div>
        }
        </AnimatePresence>
    )
}

export default Menu