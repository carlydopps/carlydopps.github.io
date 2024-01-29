import { algolia, bash, bootstrap, CSS, deno, django, electron, email, git, github, HTML5, javaScript, JSON, linkedIn, postgreSQL, postman, python, react, redis, sass, typeORM, typeScript } from "./svgs";

export const pages = ['projects', 'tech', 'about', 'home']

export const contacts = {
    linkedIn: {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/carlydopps/',
    },
    github: {
        title: 'Github',
        link: 'https://github.com/carlydopps',
    },
    email: {
        title: 'Email',
        link: 'mailto:carly.doppelheuer@gmail.com'
    },
}

const tech = {
    PYTHON: 'python',
    DJANGO: 'django',
    JAVASCRIPT: 'javaScript',
    REACT: 'react',
    POSTGRESQL: 'postgreSQL',
    TYPESCRIPT: 'typeScript',
    TYPEORM: 'typeORM',
    DENO: 'deno',
    ELECTRON: 'electron',
    GIT: 'git',
    SASS: 'sass',
    BASH: 'bash',
    REDIS: 'redis',
    ALGOLIA: 'algolia',
    POSTMAN: 'postman',
    JSON: 'JSON',
    HTML5: 'HTML5',

}

export const icons = {
    linkedIn: linkedIn(),
    github: github(),
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
    JSON: JSON(),
    HTML5: HTML5(),
    CSS: CSS(),
    bootstrap: bootstrap(),
}