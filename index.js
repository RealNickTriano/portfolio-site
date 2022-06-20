const home = document.querySelector('#home');
const projects = document.querySelector('#projects');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

const projectSection = document.querySelector('.projects');
const aboutSection = document.querySelector('.about-me');
const contactSection = document.querySelector('.contact-me');

const nav = document.getElementById('main-nav');

home.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});

projects.addEventListener('click', (event) => {
    event.preventDefault();

    const yOffset = 0; 
    const y = projectSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
});

about.addEventListener('click', (event) => {
    event.preventDefault();

    const yOffset = -60; 
    const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
});

contact.addEventListener('click', (event) => {
    event.preventDefault();

    const yOffset = -60; 
    const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
});


