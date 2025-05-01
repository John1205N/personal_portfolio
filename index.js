/* loader */
window.addEventListener("load", function () {
    setTimeout(function() {
        document.querySelector(".preloader").classList.add("hidden"); // Hide preloader after 2 seconds
    }, 1000); // 2000 milliseconds = 2 seconds
});


/*smooth scrool*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth' // Still uses native smooth scroll
            });
        }
    });
});

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// Close the menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true
});


 

// scroll //
document.addEventListener("DOMContentLoaded", function () {
    // Smooth animation from bottom for each element
    ScrollReveal().reveal('.flip-card', { delay: 40, origin: 'top', easing: 'ease-in-out'});
    ScrollReveal().reveal('.about-content', { delay: 650, origin: 'bottom' });
    ScrollReveal().reveal('.skills', { delay: 0, origin: 'bottom', easing: 'ease-in-out' });
});

/*Animations*/

/*Education*/
sr.reveal('.title', { delay: 200, origin: 'top' });
sr.reveal('.contents', { delay: 220, origin: 'right' });

sr.reveal('.title h2', { delay: 600, origin: 'top' });
sr.reveal('.box h3', { delay: 680, origin: 'left' });
sr.reveal('.box p', { delay: 750, origin: 'right' });

sr.reveal('.box', { delay: 750, origin: 'right' });
sr.reveal('.box h4', { delay: 600, origin: 'right' });


/*Certification*/

sr.reveal('.cert-card', { delay: 200, origin: 'top' });





