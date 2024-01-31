import { icons, tech } from "../../../utils/constants"

export const Tech = () => {
    const techStack = {
        technologies: Object.values(tech).slice(0, -1),
        skills: ['Full-Text Search', 'Serverless functions', 'Delayed jobs', 'Github integrations', 'Integration testing', 'Object Oriented Programming', 'CLI', 'REST API', 'CRUD', 'ERDs'],
    }

    return <div id='tech' class='tech'>
            <div className='tech-technologies'>
                <h2>Tech</h2>
                <ul>
                    {
                        techStack.technologies.map(tech => <li>
                            {icons[tech]}
                            <p>{tech}</p>
                        </li>)
                    }
                </ul>
            </div>
            <div className='tech-skills'>
                <h2>Skill</h2>
                <ul>
                    {techStack.skills.map(skill => <li>{skill}</li>)}
                </ul>
            </div>
</div>
}