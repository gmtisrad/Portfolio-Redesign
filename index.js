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
            ]
        },
        {
            name: 'The Office Quiz',
            live: 'https://gmtisrad.github.io/movie-hub/',
            technologies: [
                'fab fa-html5',
                'fab fa-css3-alt',
                'fab fa-js-square'
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
    let pageHtml = (createLandingPage() + createSummaryPage());
    alert ('page loading')
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
    return summaryHtml.join();
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