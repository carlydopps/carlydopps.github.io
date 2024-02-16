import { useState } from 'react'
import makrVideo from '../../../assets/MakrPreview.mp4'
import { icons } from '../../../utils/constants'

export const Projects = () => {
    const [project, setProject] = useState({
        detail: [],
        tech: [],
    })
    const vid = document.getElementById('projectVideo')
    const projects = {
        trouvaille: {
            title: 'Trouvaille',
            thumbnail: 'https://res.cloudinary.com/dupram4w7/image/upload/v1679078958/Screen_Shot_2023-03-17_at_1.42.16_PM_fbqvtq.png',
            body: 'Travel app that enables users to discover, create, and share personal adventures for those who want to take the road less traveled',
            cover: 'https://res.cloudinary.com/dupram4w7/image/upload/v1679078456/Screen_Shot_2023-01-09_at_12.46.40_PM_sv2crx.png',
            detail: ['Allows users to create boards to organize adventures, prioritize trips based on user priorities, plan for upcoming trips, and interact with, save, and manage trips in their network of travelers', 'Full stack application with full CRUD functionality and RESTful API using JavaScript (React) and Python (Django)', 'Responsive UX/UI using Bootstrap and CSS Flexbox'],
            tech: ['javaScript', 'react', 'python', 'django', 'HTML5', 'CSS', 'git'],
            links: {
                frontEndCode: {
                    title: 'Frontend Code',
                    url: 'https://github.com/carlydopps/trouvaille'
                },
                backEndCode: {
                    title: 'Backend Code',
                    url: 'https://github.com/carlydopps/trouvaille-server'
                },
            },
        },
        makr: {
            title: 'Makr',
            thumbnail: 'https://res.cloudinary.com/dupram4w7/image/upload/v1679076417/Screen_Shot_2023-03-17_at_1.06.03_PM_yrdqtu.png',
            body: 'Platform where DIYers can connect with professionals for expert advice on specific project needs',
            cover: makrVideo,
            detail: ['Allows users to schedule sessions with professionals for project feedback, track and manage project requests, showcase portfolios of work, and share reviews with other users', 'Frontend web application with full CRUD functionality using JavaScript (React)', 'Responsive UX/UI'],
            tech: ['javaScript', 'react', 'JSON', 'HTML5', 'CSS', 'git'],
            links: {
                demo: {
                    title: 'View demo',
                    url: 'https://vimeo.com/783445138'
                },
                frontEndCode: {
                    title: 'Frontend Code',
                    url: 'https://github.com/carlydopps/makr'
                },
            },
        },
        spec: {
            title: 'Spec',
            thumbnail: 'https://res.cloudinary.com/dupram4w7/image/upload/v1706813690/Screen_Shot_2024-02-01_at_12.54.33_PM_bmuthq.png',
            body: 'Web3 application that generates live, multi-chain, Postgres tables for events and transactions in blockchain protocols',
            cover: 'https://res.cloudinary.com/dupram4w7/image/upload/v1706314751/Screenshot_2024-01-26_at_6.18.22_PM_k0xrdq.png',
            detail: ['Automates the process of decoding, enriching, integrating, and maintaining blockchain data, allowing developers to index and query data through instant, custom Postgres tables', 'Full-Text Search utilizing infinite scroll and PostgreSQL TSVECTOR for partial match, filtering, and logical operators', 'CLI prompt commands allow users to programmatically track relevant blockchain events through a single command', 'Calculates event frequencies on live block data, tracks deltas, and incrementally rolls back database and cache across a 30TB database during blockchain reorgs', 'Utilizes Typescript (TypeORM), Javascript (React), PostgreSQL, Electron, Redis'],
            tech: ['javaScript', 'react', 'typeScript', 'typeORM', 'postgreSQL', 'deno', 'electron','sass', 'redis', 'algolia', 'git'],
            links: {
                blog: {
                    title: 'View blog',
                    url: 'https://spec.dev/'
                },
            },
        },
    }

    return <div id='projects' className='projects'>
        <h2>Projects</h2>
        <div className='projects-gallery row'>
            {
                Object.keys(projects).map(project => {
                    return <button className='projects-gallery__card card col-lg hover-overlay' data-bs-toggle='modal' data-bs-target='#project-modal' key={project}
                        onClick={(event) => {event.preventDefault()
                            setProject({
                                cover: projects[project].cover,
                                title: projects[project].title,
                                detail: projects[project].detail,
                                tech: projects[project].tech,
                                links: projects[project].links,
                            })
                        }}>
                        <img src={projects[project].thumbnail} className='card-img-top'></img>
                        <div className='card-body'>
                            <h5 className='card-title'>{projects[project].title}</h5>
                            <p className='card-text'>{projects[project].body}</p>
                        </div>
                    </button>
                })
            }
        </div>
        <div className='projects-modal modal fade' id='project-modal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true' onClick={() => vid.pause()}>
            <div className='modal-dialog modal-dialog-centered modal-lg' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <button type='button' className='btn-close btn-close-white' data-bs-dismiss='modal' aria-label='Close' onClick={() => vid.pause()}></button>
                    </div>
                    <div className='modal-body'>
                        {
                            project.title === projects.makr.title
                            ? <video src={project.cover} id='projectVideo' autoPlay muted controls preload='auto' type='video/mov' width='100%'/>
                            : <img src={project.cover} className='img-fluid'/>
                        }
                        <h5 className='modal-title text-center m-4' id='exampleModalLabel'>{project.title}</h5>
                        <ul className='project-modal__details'>
                            {project.detail.map((detail, index) => <li key={index}>{detail}</li>)}
                        </ul>
                        <ul className='project-modal__tech'>
                            {project.tech.map(t => <li key={t}>{icons[t]}</li>)}
                        </ul>
                    </div>
                    <div className='modal-footer p-4 d-flex justify-content-center'>
                        {
                            project.title
                            ? Object.entries(project.links).map(([k, v]) => <a href={v.url} target='_blank' key={v}>
                                <p>{v.title}</p>
                            </a>)
                            : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}