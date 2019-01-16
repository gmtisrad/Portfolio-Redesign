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