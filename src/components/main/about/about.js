export const About = () => {
    const sections = {
        intro: {
            title: 'Hello!',
            subtitle: `I'm Carly`,
            details: `I'm an adventurous engineer who leans into learning, fails fast, and loves to build together with a team. I have a passion for authenticity, a strength for adaptability, and a respect for resiliency.`,
        },
        questions: {
            why: `I was drawn to programming through a love of math, language, and creativity. Since then, I've become even more intrigued by the computational yet creative mindset programming ignites. I love the ambiguous, the unknown, and persisting through inevitable hurdles while lending a hand to support teammates when they are too. I love that it's taught me who I am when I succeed but more importantly, who I am when I fail too.`,
            when: `I discovered programming while working with computer science graduate students. I started studying the fundamentals to better understand the students' curriculum, and it sparked an ambition to use concepts of programming to improve workflows across all engineering programs. I dove into building new tools to automate tasks, reduce error, and increase efficiency. It started as a small curiosity but quickly turned into a career leap, and I haven’t looked back since.`,
            where: `I'm currently at Spec building a developer-first Web3 application that generates live, multi-chain Postgres tables for events and transactions in blockchain protocols. It automates the process of decoding, enriching, integrating, and maintaining data, allowing developers to index and query data through instant, custom tables. Currently focused in backend with experience in full-stack using Typescript (TypeORM), JavaScript (React), and Postgres with previous experience in Python`,
            how: `I’m an autonomous learner, and I value a deep understanding of the fundamentals for a strong foundation to build upon. I strive for a balance of humility to know when to ask for help along with autonomy to research errors and new concepts before doing so. I'm drawn to the deep, focused work on individual tasks combined with teamwork and new perspectives that take a project to a whole new level.`,
        },
        personal: {
            title: 'Behind the Scenes',
            details: [
                `A few years ago, my husband and I pursued a college dream of adventuring across the country. We spent two years working remotely and traveling the country in a camper that we renovated together. Sometimes we were the only people we knew on a little road of an unknown town in a brand new state, and it taught me a lot about enjoying the ups and downs of the adventure and the serendipity of chance encounters.`,
                `'When everything goes wrong, that's when the adventure begins.' - Yvon Chouinard`,
                `Two years, twenty-nine states, four flat tires, and a lot of broken things later, it still feels like a dream.`
            ],
        },
    }
    return <div id='about' className='about'>
        <section className='about-intro'>
            <div className='about-intro__images'>
                <img src='https://res.cloudinary.com/dupram4w7/image/upload/v1706224543/DSC_0048_copy_3_yjz8jt.jpg' alt='Profile image'/>
            </div>
            <div className='about-intro__text'>
                <h1>{sections.intro.title}</h1>
                <h3>{sections.intro.subtitle}</h3>
                <p className='lead text-muted'>{sections.intro.details}</p>
            </div>
        </section>
        <section className='about-questions'>
            {
                Object.keys(sections.questions).map(q => {
                    return <div key={q}>
                        <h3>{q}</h3>
                        <p>{sections.questions[q]}</p>
                    </div>
                })
            }
        </section>
        <section className='about-personal'>
            <div className='about-personal__photos'>
                <img className='img-responsive' src='https://res.cloudinary.com/dupram4w7/image/upload/v1678837100/Trouvaille/image_4_qnkc9n.jpg'/>
                <img className='img-responsive travel-grid-img' src='https://res.cloudinary.com/dupram4w7/image/upload/v1678837098/image_3_dtilev.jpg'/>
                <img className='img-responsive' src='https://res.cloudinary.com/dupram4w7/image/upload/v1678837286/IMG_8045_zu2kio.jpg'/>
                <img className='img-responsive' src='https://res.cloudinary.com/dupram4w7/image/upload/v1673365249/eicshdaqcbjw2wnrsxyc.jpg'/>
            </div>
            <div className='about-personal__desc'>
                <h3>{sections.personal.title}</h3>
                {
                    sections.personal.details.map((detail, index) => <p key={index}>{detail}</p>)
                }
            </div>
        </section>
    </div>
}