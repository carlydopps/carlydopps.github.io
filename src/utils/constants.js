import { algolia, AWS, bash, bootstrap, CSS, deno, django, electron, email, git, gitHub, HTML5, javaScript, linkedIn, postgreSQL, postman, python, react, redis, sass, SQL, typeORM, typeScript } from "./svgs";

export const pages = ['home', 'projects', 'tech', 'about']

export const contacts = {
    linkedIn: {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/carlydopps/',
    },
    gitHub: {
        title: 'GitHub',
        link: 'https://github.com/carlydopps',
    },
    email: {
        title: 'Email',
        link: 'mailto:carly.doppelheuer@gmail.com'
    },
}

export const tech = {
    JAVASCRIPT: 'javaScript',
    TYPESCRIPT: 'typeScript',
    PYTHON: 'python',
    SQL: 'SQL',
    REACT: 'react',
    TYPEORM: 'typeORM',
    DJANGO: 'django',
    POSTGRESQL: 'postgreSQL',
    REDIS: 'redis',
    ELECTRON: 'electron',
    DENO: 'deno',
    BASH: 'bash',
    HTML5: 'HTML5',
    SASS: 'sass',
    CSS: 'CSS',
    BOOTSTRAP: 'bootstrap',
    GIT: 'git',
    POSTMAN: 'postman',
    ALGOLIA: 'algolia',
    AWS: 'AWS',
}

export const icons = {
    linkedIn: linkedIn(),
    gitHub: gitHub(),
    email: email(),
    python: python(),
    django: django(),
    javaScript: javaScript(),
    SQL: SQL(),
    react: react(),
    postgreSQL: postgreSQL(),
    typeScript: typeScript(),
    typeORM: typeORM(),
    deno: deno(),
    electron: electron(),
    git: git(),
    sass: sass(),
    bash: bash(),
    redis: redis(),
    algolia: algolia(),
    postman: postman(),
    HTML5: HTML5(),
    CSS: CSS(),
    bootstrap: bootstrap(),
    AWS: AWS(),
}