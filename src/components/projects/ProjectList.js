import { useState } from "react"
import makrVideo from '../../assets/MakrPreview.mp4'

export const ProjectList = () => {

    const [project, setProject] = useState({detail: [""]})

    const makr = {
        title: "Makr",
        thumbnail: "https://res.cloudinary.com/dupram4w7/image/upload/v1679076417/Screen_Shot_2023-03-17_at_1.06.03_PM_yrdqtu.png",
        body: "Makr is a platform where DIYers can connect with professionals for expert advice on specific project needs. By making expert feedback more accessible and customized, the goal is to help Makrs accomplish higher quality projects more efficiently and, in turn, create additional employment and remote opportunities for professionals.",
        cover: makrVideo,
        detail: ["Front-end web application where DIYers can connect with professionals for expert advice on their project needs", "Utilized JavaScript (React) and JSON with full CRUD functionality", "Responsive UX/UI"],
        skills: "https://skills.thijs.gg/icons?i=js,react,html,css,git)"
    }
    const trouvaille = {
        title: "Trouvaille",
        thumbnail: "https://res.cloudinary.com/dupram4w7/image/upload/v1679078958/Screen_Shot_2023-03-17_at_1.42.16_PM_fbqvtq.png",
        body: "Trouvaille enables travelers to discover, create, and share personal adventures with others. People often struggle to find rare experiences, which leads to visiting tourist traps instead. The goal of Trouvaille is to make those rare experiences more accessible and, in turn, create a trip full of “hidden gems” and unique adventures. An added goal is to build connections with other travelers and to make trips more meaningful by filling them with places recommended from someone they know or now follow.",
        cover: "https://res.cloudinary.com/dupram4w7/image/upload/v1679078456/Screen_Shot_2023-01-09_at_12.46.40_PM_sv2crx.png",
        detail: ["Full-stack web application where travelers can discover and share personal adventures for those who want to take the road less traveled", "Utilized JavaScript (React) and Python (Django) with CRUD functionality and REST API", "Integration testing", "API testing in Postman", "Responsive UX/UI"],
        skills: "https://skills.thijs.gg/icons?i=js,py,react,django,html,css,git"
    }

    const vid = document.getElementById("projectVideo");

    return <>
        <section className="container project-gallery">
            <div className="row row-cols-1 row-cols-lg-3 d-flex justify-content-center">
                <button className="card col m-3" data-bs-toggle="modal" data-bs-target="#project-modal" 
                onClick={(event) => {event.preventDefault()
                    setProject({
                        cover: makr.cover,
                        title: makr.title,
                        detail: makr.detail,
                        skills: makr.skills
                    })
                }}>
                    <img src={makr.thumbnail} className="card-img-top pt-2"></img>
                    <div className="card-body">
                        <h5 className="card-title">{makr.title}</h5>
                        <p className="card-text">{makr.body}</p>
                    </div>
                </button>
                <button className="card col m-3" data-bs-toggle="modal" data-bs-target="#project-modal"
                    onClick={(event) => {event.preventDefault()
                        setProject({
                            cover: trouvaille.cover,
                            title: trouvaille.title,
                            detail: trouvaille.detail,
                            skills: trouvaille.skills
                        })
                    }}>
                    <img src={trouvaille.thumbnail} className="card-img-top pt-2"></img>
                    <div className="card-body">
                        <h5 className="card-title">{trouvaille.title}</h5>
                        <p className="card-text">{trouvaille.body}</p>
                    </div>
                </button>
            </div>
        </section>
        <div className="modal fade" id="project-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => vid.pause()}>
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => vid.pause()}></button>
                    </div>
                    <div className="modal-body">
                        {
                            project.title === "Trouvaille"
                            ? <img src={project.cover} className="img-fluid"/>
                            : <video src={project.cover} id="projectVideo" autoPlay muted controls preload="auto" type="video/mov" width="100%"/>
                        }
                        <h5 className="modal-title text-center m-4" id="exampleModalLabel">{project.title}</h5>
                        <ul>
                        {
                            project.detail.map(detail => <li>{detail}</li>)
                        }
                        </ul>
                        <img src={project.skills} className="img-fluid text-center"/>
                    </div>
                    <div className="modal-footer p-4 d-flex justify-content-center">
                        {
                            project.title === "Trouvaille"
                            ? <>
                                <a href="https://github.com/carlydopps/trouvaille">Front-end code</a>
                                <a href="https://github.com/carlydopps/trouvaille-server">Back-end code</a>
                                <a>Demo coming soon!</a>
                            </>
                            : <>
                                <a href="https://vimeo.com/783445138">View demo</a>
                                <a href="https://github.com/carlydopps/makr">View code</a>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}