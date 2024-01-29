import { icons } from "../../../utils/constants"

export const Tech = () => {
    const techStack = {
        technologies: ['python', 'django', 'javaScript', 'react', 'typeScript', 'typeORM', 'postgreSQL', 'deno', 'electron', 'JSON', 'redis', 'bash', 'git', 'algolia', 'postman', 'sass', 'bootstrap', 'HTML5'],
        skills: ['Serverless functions', 'Delayed jobs', 'Full-Text Search', 'Github integrations', 'Integration testing', 'Object Oriented Programming', 'REST API', 'CLI', 'CRUD', 'ERD'],
    }

    return <div id='tech' class='tech'>
            <div className='tech-technologies'>
                <h5>Tech</h5>
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
                <h5>Skill</h5>
                <ul>
                    {techStack.skills.map(skill => <li>{skill}</li>)}
                </ul>
            </div>
</div>
}