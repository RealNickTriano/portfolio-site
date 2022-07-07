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
/* window.onscroll = () => {
    if(document.documentElement.scrollTop > 50)
    {

    }
    else{

    }
} */

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

// Hover listeners

home.addEventListener('mouseover', (event) => {
    home.nextElementSibling.classList.add('nav-line-animate')
})
home.addEventListener('mouseout', (event) => {
    home.nextElementSibling.classList.remove('nav-line-animate')
})
about.addEventListener('mouseover', (event) => {
    about.nextElementSibling.classList.add('nav-line-animate')
})
about.addEventListener('mouseout', (event) => {
    about.nextElementSibling.classList.remove('nav-line-animate')
})
projects.addEventListener('mouseover', (event) => {
    projects.nextElementSibling.classList.add('nav-line-animate')
})
projects.addEventListener('mouseout', (event) => {
    projects.nextElementSibling.classList.remove('nav-line-animate')
})
contact.addEventListener('mouseover', (event) => {
    contact.nextElementSibling.classList.add('nav-line-animate')
})
contact.addEventListener('mouseout', (event) => {
    contact.nextElementSibling.classList.remove('nav-line-animate')
})


