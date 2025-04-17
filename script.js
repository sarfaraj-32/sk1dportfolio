// Get DOM elements
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Debug logs
console.log('Menu Icon:', menuIcon);
console.log('Navbar:', navbar);

// Toggle navbar
menuIcon.addEventListener('click', () => {
    console.log('Menu clicked!'); // Debug log
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

// Close navbar when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// Close navbar on window resize if screen is large
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});
