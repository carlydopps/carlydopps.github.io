export const Intro = () => {
    const intro = {
        title: 'Hello!',
        subtitle: `I'm Carly`,
        details: `I'm an adventurous engineer who leans into learning, fails fast, and loves to build together with a team. I have a passion for authenticity, a strength for adaptability, and a respect for resiliency.`,
    }

    return <div id='intro' class='intro'>
        <div class='intro-intro__images'>
            <img src='https://res.cloudinary.com/dupram4w7/image/upload/v1706224543/DSC_0048_copy_3_yjz8jt.jpg' alt='Profile image'/>
        </div>
        <div class='intro-intro__text'>
            <h1>{intro.title}</h1>
            <h3>{intro.subtitle}</h3>
            <p class='lead text-muted'>{intro.details}</p>
        </div>
    </div>
}