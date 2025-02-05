const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    navToggle.classList.toggle('active'); // Toggle active class

    if (navToggle.classList.contains('active')) {
        closeIcon.style.display = 'block';
        hamburger.style.display = 'none';
    } else {
        closeIcon.style.display = 'none';
        hamburger.style.display = 'block';
    }
});
