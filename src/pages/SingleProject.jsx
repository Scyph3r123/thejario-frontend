import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
const PROJECT = gql`
    query GetProject($projectId: ID) {
        projects {
            data {
                id
            }
        }
        project(id: $projectId) {
            data {
                attributes {
                    title
                    description
                    featured_image {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    images {
                        data {
                            id
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`
const SingleProject = () => {
    const { id } = useParams()
    const { loading, error, data } = useQuery(PROJECT, {
        variables: { projectId: id }
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const projectIds = data.projects.data.map((p) => p.id)
    const currentIndex = projectIds.indexOf(id);
    const nextProjectId = currentIndex < projectIds.length - 1 ? projectIds[currentIndex + 1] : null
    const previousProjectId = currentIndex > 0 ? projectIds[currentIndex - 1] : null

    return (
        <>
            <div className="pt-[150px]">
                <div className="container mx-auto px-3">
                    <Link className='font-medium text-primary inline-flex items-center' to={'/projects'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>
                        Back to projects
                    </Link>
                </div>
            </div>
            <div className='py-20 min-h-screen flex'>
                <div className="container m-auto px-3">
                    <div className="xl:w-2/3 mx-auto mt-10">
                        <div className="flex flex-col lg:flex-row gap-10 items-center">
                            <div className='flex-shrink-0 lg:mb-0 -mb-[200px] relative z-10'>
                                <div className="z-10 absolute w-full h-full bg-gradient-to-t from-black via-transparent to-transparent lg:hidden"></div>
                                <img className='lg:w-[500px] relative z-0 pointer-events-none' src={`http://localhost:1337${data.project.data.attributes.featured_image.data?.attributes.url}`} alt="" />
                            </div>
                            <div className='relative z-20'>
                                <h1 className='font-bold text-[90px] leading-none mb-5'>{data.project.data.attributes.title}</h1>
                                <p className='text-lg leading-relaxed'>{data.project.data.attributes.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-20'>
                <div className="container mx-auto px-3">
                    <ul className='grid gap-10'>
                        {data.project.data.attributes.images.data.map(image => (
                            <li key={image.id}>
                                <img className='w-full h-auto pointer-events-none' src={`http://localhost:1337${image.attributes.formats.large.url}`} alt="" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="py-20">
                <div className="container mx-auto px-3 flex items-center justify-between">
                    {previousProjectId && (
                        <Link to={`/projects/${previousProjectId}`} className='inline-flex items-center font-medium text-lg uppercase'>
                            <div className='lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] flex rounded-full border-2 border-primary text-primary mr-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 m-auto" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
                            </div>
                            Previous
                        </Link>
                    )}
                    {nextProjectId && (
                        <Link to={`/projects/${nextProjectId}`} className='inline-flex items-center font-medium text-lg uppercase'>
                            Next
                            <div className='lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] flex rounded-full border-2 border-primary text-primary ml-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 m-auto" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
                            </div>
                        </Link>
                    )}
                </div>
            </div>

        </>
    )
}

export default SingleProject