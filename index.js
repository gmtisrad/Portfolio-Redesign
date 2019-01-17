//Data used to generate the non-static portions of the website
const STORE = {
    landingPage:{
            headline: 'Gabriel Timm',
            tagline: `You can call me Gabe! I'm a Full Stack developer and security enthusiast!`,
    },
    summary: {
        headline: 'About Me',
        summaryTagline: [
            `I'm a Full Stack Web Developer, and career student in the PDX area.`,
            `I'm interested in making the web safer and easier to use. Beyond that, I'm fascinated by the IoT space, and how the industry is going to go about securing these emerging technologies and integrating them into our current web environment.`,
            `When I'm not developing, I'm probably listening to a boring technical podcast or spending time with my wife and dogs.`
        ]
    },
    projects: [
        {
            name: 'Movie Hub',
            live: 'https://gmtisrad.github.io/movie-hub/',
            technologies: [
                'fab fa-html5',
                'fab fa-css3-alt',
                'fab fa-js-square'
            ],
            summary: [
                `Movie Hub gathers all of the information about a movie you're interested in into one place.`,
                `With just a few simple clicks you can get a description of your movie, the New York Times reviews, the top related Youtube clips and even the full cast list.`
            ]
        },
        {
            name: 'The Office Quiz',
            live: 'https://gmtisrad.github.io/the-office-quiz/',
            technologies: [
                'fab fa-html5',
                'fab fa-css3-alt',
                'fab fa-js-square'
            ],
            summary: [
                'Test your mettle and see if you know as much about The Office as you think',
                'I have 5 years of nearly constant research of The Office under my belt. I dug deep inside my wealth of knowledge and found the most difficult questions I could.',
                'Good luck and Godspeed.'
            ]
        },
    ],
    socialLinks: [
        {
            link: 'https://github.com/gmtisrad',
            icon: 'fab fa-github'
        },
        {
            link: 'https://codepen.io/Gabe_M_Timm/',
            icon: 'fab fa-codepen'
        },
        {
            link: 'https://www.linkedin.com/in/gabe-m-timm/',
            icon: 'fab fa-linkedin-in'
        },
        {
            link: 'mailto:gabe.m.timm@gmail.com',
            icon: 'fa fa-envelope'
        }
    ]
}

function renderPage() {
    let pageHtml = (createLandingPage() + createSummaryPage() + createProjects() + createFooter());
    $('body').prepend(pageHtml);
    handleEvents();
}

function createLandingPage() {
    let landingHtml = `
        <main class='landing-page full-page'>
            <div id='introduction' class='container'>
                <div class='row headline'>
                    <h1 class='col-12 text-center font-weight-bold'>${STORE.landingPage.headline}</h1>
                </div>
                <div class='row tagline'>
                    <h2 class='col-12 text-center'>${STORE.landingPage.tagline}</h2>
                </div>
                <div class='row social-icons'>
                    <section class="col-12 text-center social-icons" style='font-size: 4em'>
                        ${createSocialLinks()}
                    </section>
                </div>
            </div>
        </main>
        <a href='' class='next-section js-next-section'><i class="fas fa-angle-down"></i></a>`;
    return landingHtml;
}

function createSocialLinks(){
    let socialLinks = [];

    for (let i = 0; i < STORE.socialLinks.length; i++) {
        let link = `
            <a href='${STORE.socialLinks[i].link}'><i class='${STORE.socialLinks[i].icon}'></i></a>
        `;
        socialLinks.push(link);
    }
    return (socialLinks.join(''));
}

function createSummaryPage(){
    let summaryHtml = `
        <section class='full-page summary-page'>
            <div id='summary' class='container'>
                ${createSummary()}
            </div>
        </section>`;
    return summaryHtml;
}

function createSummary () {
    let summaryHtml = [];
    summaryHtml.push(`<div class='row'>
                        <h1 class='col-12 border-bottom border-light text-center summary-header'>${STORE.summary.headline}</h1>
                    </div>`)
    for (let i = 0; i < STORE.summary.summaryTagline.length; i++){
        let taglineHtml = `<div class='row tagline'>
                                <p class='col-12 text-center'>${STORE.summary.summaryTagline[i]}</p>
                            </div>`;
        summaryHtml.push(taglineHtml);
    }
    return summaryHtml.join('');
}

function createProjects () {
    let projectsHtml = [];

    for (let i = 0; i < STORE.projects.length; i++) {
        if(i == 0 || 0 == i%2){
            let project = `<section class='full-page project-page${i+1}'>
                                <div id='project${i+1}' class='container'>
                                    <div id='project${i+1}-row'class='row'>
                                        <div class='project-iframe-container d-none d-sm-inline-block col-sm-7 embed-responsive-4by3'>
                                            <iframe class='embed-responsive-item project-iframe' src='${STORE.projects[i].live}'></iframe>
                                        </div>
                                        <div class='project-description col-12 col-sm-5'>
                                            <h3 class='text-center project-header'>${STORE.projects[i].name}</h3>
                                            <span class='text-center project-technologies'>${createTechLinks(i)}</span>
                                            ${createProjectSummaries(i)}
                                        </div>
                                    </div>
                                </div>
                            </section>`;
            projectsHtml.push(project);
        }
        else{
            let project = `<section class='full-page project-page${i+1}'>
                                <div id='project${i+1}' class='container'>
                                    <div id='project${i+1}-row'class='row'>
                                        <div class='project-description col-12 col-sm-5'>
                                            <h3 class='text-center project-header'>${STORE.projects[i].name}</h3>
                                            <span class='text-center project-technologies'>${createTechLinks(i)}</span>
                                            ${createProjectSummaries(i)}
                                        </div>
                                        <div class='project-iframe-container d-none d-sm-inline-block col-sm-7 embed-responsive-4by3'>
                                            <iframe class='embed-responsive-item project-iframe' src='${STORE.projects[i].live}'></iframe>
                                        </div>
                                    </div>
                                </div>
                            </section>`;
            projectsHtml.push(project); 
        }
    }

    return projectsHtml.join('');
}

function createTechLinks(projNum) {
    let techLinks = [];

    for (let i = 0; i < STORE.projects.technologies; i++){
        let link = `<i class='${STORE.projects[projNum].links[i]}'>`;
        techLinks.push(link);
    }
    return techLinks.join('');
}

function createProjectSummaries(numProj) {
    let projectSummary = [];

    for (let i = 0; i < STORE.projects[numProj].summary.length; i++) {
        let summary = `<p class='text-center'>${STORE.projects[numProj].summary[i]}</p>`;
        projectSummary.push(summary);
    }
    return projectSummary.join('');
}

function createFooter () {
    let footer = `
    <section class='footer'>
        <div id='footer' class='container'>
            <div id='footer-row' class='row'>
                <div class='col-12 col-sm-4 email'>
                    <h3 class='text-center'>EMAIL</h3>
                    <a href='mailto:Gabe.M.Timm@gmail.com' class='text-center contact-info'><p>Gabe.M.Timm@gmail.com</p></a>
                </div>
                <div class='d-none d-md-block col-sm-4 placeholder'></div>
                <div class='col-12 col-sm-4 phone'>
                    <h3 class='text-center'>PHONE</h3>
                    <a href='tel:+19712260252' class='text-center contact-info'><p>971.226.0252</p></a>
                </div>
            </div>
        </div>
    </section>`;
    return footer;
}

function handleNextPage () {
    $('.js-next-section').on('click', function(event) {
        event.preventDefault();
        let yOffset = window.pageYOffset + 1;
        let numPages = Math.floor(yOffset / window.innerHeight) + 1;
        
        scrollTo = numPages * window.innerHeight;

        window.scroll({ 
            top : scrollTo,
            left : 0,
            behavior: 'smooth'});
    })
}

function handleScroll () {
    $(window).scroll(function(){
        let yOffset = window.pageYOffset + 1;
        let numPages = Math.floor(yOffset / window.innerHeight) + 1;
        
        if (0 == numPages % 2) {
            $('.js-next-section').css('color', '#38577C');
        }
        else if (3 == numPages) {
            $('.js-next-section').css('color', '#38577C');
        }
        else {
            $('.js-next-section').css('color', '#EAF1F7');
        }
    })
}

function handleEvents () {
    handleNextPage();
    handleScroll();
}

$(renderPage());