export const Tech = () => {

    const technologies = ['Python (Django)', 'JavaScript (React.js)', 'SQL', 'HTML', 'CSS', 'Bootstrap', 'Git', 'JSON','Postman']

    const skills = ['REST APIs', 'CRUD functionality', 'Integration testing', 'OOP', 'Relationship diagrams', 'Wireframing']

    return <section>
        <h2 className="text-center display-4">Tech Stack</h2>
        <div className="container container-fluid tech-gallery d-flex justify-content-center">
            <div className="row m-5 justify-content-center">
                <div className="col col-lg-4">
                    <h5>Technologies</h5>
                    <ul className="row">
                        {technologies.map(tech => <li className="">{tech}</li>)}
                    </ul>
                </div>
                <div className="col col-lg-4">
                    <h5>Skills</h5>
                    <ul className="row">
                        {skills.map(skill => <li className="">{skill}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    </section>
}