const home = document.querySelector('#home');
const projects = document.querySelector('#projects');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const copyright = document.querySelector('#copyright');

const projectSection = document.querySelector('.projects');
const aboutSection = document.querySelector('.about-me');
const contactSection = document.querySelector('.contact-me');
const mainHeader = document.querySelector('.main-header');

const nav = document.getElementById('main-nav');

const year = new Date().getFullYear();

copyright.innerHTML = `&copy; ${year} Nicholas Triano`;

//Handle navabar change on scroll
window.onscroll = () => {
    if(document.documentElement.scrollTop > 50)
    {
        nav.classList.add('navbar-scroll');
        mainHeader.classList.add('mt-100');
    }
    else{
        nav.classList.remove('navbar-scroll');
        mainHeader.classList.remove('mt-100');
    }
}

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


