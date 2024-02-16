import { algolia, bash, bootstrap, CSS, deno, django, electron, email, git, gitHub, HTML5, javaScript, linkedIn, postgreSQL, postman, python, react, redis, sass, typeORM, typeScript } from "./svgs";

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
    PYTHON: 'python',
    DJANGO: 'django',
    JAVASCRIPT: 'javaScript',
    REACT: 'react',
    TYPESCRIPT: 'typeScript',
    TYPEORM: 'typeORM',
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
}

export const icons = {
    linkedIn: linkedIn(),
    gitHub: gitHub(),
    email: email(),
    python: python(),
    django: django(),
    javaScript: javaScript(),
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
}