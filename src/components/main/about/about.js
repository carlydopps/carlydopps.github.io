export const About = () => {
    const sections = {
        intro: {
            title: 'Hello!',
            subtitle: `I'm Carly`,
            details: `I'm an adventurous engineer who leans into learning, fails fast, and loves to build together with a team. I have a passion for authenticity, a strength for adaptability, and a respect for resiliency.`,
        },
        questions: {
            why: `I was drawn to programming through a love of math, language, and creativity. Since then, I've become even more intrigued by the computational yet creative mindset programming ignites. I love diving into a challenge and feeling fear give way to courage again and again. I love the ambiguous, the unknown, and persisting through inevitable hurdles while lending a hand to support teammates when they are too. I love that it's taught me who I am when I succeed but more importantly, who I am when I fail too.`,
            when: `I recently left a job I loved because I found a passion for programming. I discovered programming while working with computer science graduate students. I started studying the fundamentals to better understand the students' curriculum, and it sparked an ambition to use concepts of programming to improve workflows across all engineering programs. I dove into building new tools to automate tasks, reduce error, and increase efficiency. It started as just a small curiosity but turned into a career leap, and I haven’t looked back since.`,
            where: `I recently completed an immersive, full-time program at Nashville Software School where we focused on full-stack fundamentals and remote team collaboration. We applied object-oriented programming daily through group and individual projects and developed multiple web applications with CRUD functionality and REST APIs. I'm now collaborating on a startup project, Spec, to further my understanding in full-stack and back-end technologies and to take a deep dive into the systems and intricacies of working with real-time data.`,
            how: `I’m an autonomous learner, and I value a deep understanding of the fundamentals for a strong foundation to build upon. I strive for a balance of humility to know when to ask for help along with autonomy to research errors and new concepts before doing so. I'm drawn to the deep, focused work on individual tasks combined with teamwork and new perspectives that take a project to a whole new level.`,
        },
        personal: {
            title: 'Behind the Scenes',
            details: [
                `A few years ago, my husband and I decided to pursue a childhood dream of adventuring across the country. We spent two years working remotely and traveling the country in a camper that we renovated together. Sometimes we were the only people we knew on a little road of an unknown town in a brand new state, and it taught me so much about enjoying the ups and downs of the adventure and the serendipity of chance encounters.`,
                `'When everything goes wrong, that's when the adventure begins.' - Yvon Chouinard`,
                `Two years, twenty-nine states, four flat tires, and a lot of broken things later, it still feels like a dream.`
            ],
        },
    }
    return <div id='about' class='about'>
        <section class='about-intro'>
            <div class='about-intro__images'>
                <img src='https://res.cloudinary.com/dupram4w7/image/upload/v1706224543/DSC_0048_copy_3_yjz8jt.jpg' alt='Profile image'/>
            </div>
            <div class='about-intro__text'>
                <h1>{sections.intro.title}</h1>
                <h3>{sections.intro.subtitle}</h3>
                <p class='lead text-muted'>{sections.intro.details}</p>
            </div>
        </section>
        <section class='about-questions'>
            {
                Object.keys(sections.questions).map(q => {
                    return <div>
                        <h3>{q}</h3>
                        <p>{sections.questions[q]}</p>
                    </div>
                })
            }
        </section>
        <section class='about-personal'>
            <div class='about-personal__photos'>
                <img class='img-responsive' src='https://res.cloudinary.com/dupram4w7/image/upload/v1678837100/image_4_qnkc9n.jpg'/>
                <img class='img-responsive travel-grid-img' src='https://res.cloudinary.com/dupram4w7/image/upload/v1678837098/image_3_dtilev.jpg'/>
                <img class='img-responsive' src='https://res.cloudinary.com/dupram4w7/image/upload/v1678837286/IMG_8045_zu2kio.jpg'/>
                <img class='img-responsive' src='https://res.cloudinary.com/dupram4w7/image/upload/v1673365249/eicshdaqcbjw2wnrsxyc.jpg'/>
            </div>
            <div class='about-personal__desc'>
                <h3>{sections.personal.title}</h3>
                {
                    sections.personal.details.map(detail => <p>{detail}</p>)
                }
            </div>
        </section>
    </div>
}