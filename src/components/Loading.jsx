import React, { useEffect } from 'react'

const Loading = ({ setLoading }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 4000)
        return() => clearTimeout(timer)
    })

    return (
        <div className='bg-black fixed w-full h-full z-50 flex'>
            <span className='m-auto text-[200px]'>Loading</span>
        </div>
    )
}

export default Loading