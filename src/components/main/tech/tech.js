import { icons, tech } from "../../../utils/constants"

export const Tech = () => {
    const techStack = {
        technologies: Object.values(tech),
        skills: ['REST APIs', 'Full-Text Search', 'Git version control', 'Edge functions', 'Poller jobs', 'GitHub apps', 'Object Oriented Programming (OOP)', 'Unit and Integration Testing', 'Debugging and Troubleshooting', 'Command Line Interface (CLI)', 'Entity Relationship Diagrams (ERDs)', 'User Interface Design', 'Wireframing'],
    }

    return <div id='tech' className='tech'>
            <div className='tech-technologies'>
                <h2>Tech</h2>
                <ul>
                    {
                        techStack.technologies.map(tech => <li key={tech}>{icons[tech]}
                            <p>{tech}</p>
                        </li>)
                    }
                </ul>
            </div>
            <div className='tech-skills'>
                <h2>Skill</h2>
                <ul>
                    {techStack.skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
            </div>
</div>
}