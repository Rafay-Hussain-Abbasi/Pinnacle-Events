const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// Close the mobile menu automatically when a nav link is tapped
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            links.forEach(l => l.classList.remove('fade'));
            hamburger.classList.remove('toggle');
        }
    });
});

// Header Starts
const navBar = document.querySelector('.navBar');
const logo = document.querySelector('.logo');
const hamburgerLines = document.querySelectorAll('.hamburger-lines');
const navLinkEls = document.querySelectorAll('.navLink');

function updateHeaderOnScroll() {
    const scrolled = window.scrollY > 10;

    navBar.classList.toggle('scrolled', scrolled);
    logo.classList.toggle('scrolled', scrolled);
    hamburgerLines.forEach(line => line.classList.toggle('scrolled', scrolled));
    navLinkEls.forEach(link => link.classList.toggle('scrolled', scrolled));
}

window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

