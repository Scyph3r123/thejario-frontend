import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='min-h-screen flex'>
      <div className='m-auto text-center space-y-5'>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-[150px] h-[150px] text-primary inline-block" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M9 10l.01 0" />
          <path d="M15 10l.01 0" />
          <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
        </svg>
        <h1 className='text-primary text-[120px] font-bold leading-none'>404</h1>
        <p className='text-lg'>Oh Snap! The page you requested was not found on my website.</p>
        <Link to={'/'} className='text-primary inline-flex'>
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-6 h-6" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
          </svg>
          Return to homepage
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage