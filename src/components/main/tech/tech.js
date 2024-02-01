import { icons, tech } from "../../../utils/constants"

export const Tech = () => {
    const techStack = {
        technologies: Object.values(tech),
        skills: ['Object Oriented Programming (OOP)', 'Unit and Integration Testing', 'Debugging and Troubleshooting', 'Git version control', 'Command Line Interface (CLI)', 'RESTful APIs', 'Full-Text Search', 'Serverless functions', 'Delayed jobs', 'Github integrations', 'Entity Relationship Diagrams (ERDs)', 'Wireframing'],
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