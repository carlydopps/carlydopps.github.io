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
        makr: {
            title: 'Makr',
            thumbnail: 'https://res.cloudinary.com/dupram4w7/image/upload/v1679076417/Screen_Shot_2023-03-17_at_1.06.03_PM_yrdqtu.png',
            body: 'Makr is a platform where DIYers can connect with professionals for expert advice on specific project needs. By making expert feedback more accessible and customized, the goal is to help Makrs accomplish higher quality projects more efficiently and, in turn, create additional employment and remote opportunities for professionals.',
            cover: makrVideo,
            detail: ['Front-end web application where DIYers can connect with professionals for expert advice on their project needs', 'Utilized JavaScript (React) and JSON with full CRUD functionality', 'Responsive UX/UI'],
            tech: ['javaScript', 'react', 'JSON', 'HTML5', 'CSS', 'git'],
            links: {
                demo: {
                    title: 'View demo',
                    url: 'https://vimeo.com/783445138'
                },
                frontEndCode: {
                    title: 'Front-end Code',
                    url: 'https://github.com/carlydopps/makr'
                },
            },
        },
        trouvaille: {
            title: 'Trouvaille',
            thumbnail: 'https://res.cloudinary.com/dupram4w7/image/upload/v1679078958/Screen_Shot_2023-03-17_at_1.42.16_PM_fbqvtq.png',
            body: 'Trouvaille enables travelers to discover, create, and share personal adventures with others. The goal of Trouvaille is to make rare experiences more accessible and, in turn, create a trip full of “hidden gems” and unique adventures for those seeking the path less traveled.',
            cover: 'https://res.cloudinary.com/dupram4w7/image/upload/v1679078456/Screen_Shot_2023-01-09_at_12.46.40_PM_sv2crx.png',
            detail: ['Full-stack web application where travelers can discover and share personal adventures for those who want to take the road less traveled', 'Utilized JavaScript (React) and Python (Django) with CRUD functionality and REST API', 'Integration testing', 'API testing in Postman', 'Responsive UX/UI'],
            tech: ['javaScript', 'react', 'python', 'django', 'HTML5', 'CSS', 'git'],
            links: {
                frontEndCode: {
                    title: 'Front-end Code',
                    url: 'https://github.com/carlydopps/trouvaille'
                },
                backEndCode: {
                    title: 'Back-end Code',
                    url: 'https://github.com/carlydopps/trouvaille-server'
                },
            },
        },
        spec: {
            title: 'Spec',
            thumbnail: 'https://res.cloudinary.com/dupram4w7/image/upload/v1706314751/Screenshot_2024-01-26_at_6.18.22_PM_k0xrdq.png',
            body: 'Spec is a Web3 platform that generates live, multi-chain, Postgres tables for all events and transactions in a blockchain protocol. It automates the process of decoding, enriching, integrating, and maintaining data through instant, custom tables, allowing users to seamlessly index and query transactions with high efficiency and real-time accuracy.',
            cover: 'https://res.cloudinary.com/dupram4w7/image/upload/v1706314751/Screenshot_2024-01-26_at_6.18.22_PM_k0xrdq.png',
            detail: ['Web3 electron app and web application where developers can index and query live, multi-chain blockchain data though custom Postgres tables', 'Utilized Javascript (React), Typescript (TypeORM), PostgreSQL, Deno', 'Integrated delayed polling jobs, serverless functions, Docker, and Kubernetes to handle live data streams', 'Utilized command line interface to condense complex back-end logic into singular CLI commands to provide an efficient, intuitive programming experience '],
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