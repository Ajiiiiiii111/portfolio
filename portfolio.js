//responsive
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

let menuIcon = document.querySelector('#menuicon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); 
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });
};

// Create an IntersectionObserver to track when sections are in view
const section = document.querySelectorAll('section');

// Ensure that the Home section is visible on load
document.querySelector('#home').classList.add('visible');

const observerOptions = {
  root: null, // Use the viewport as the root
  rootMargin: '0px',
  threshold: 0.1 // Trigger when 50% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add the 'visible' class when the section comes into view
    } else {
      entry.target.classList.remove('visible'); // Remove the 'visible' class when the section goes out of view
    }
  });
}, observerOptions);

// Start observing each section except the Home section
sections.forEach(section => {
  if (section.id !== 'home') {
    observer.observe(section);
  }
});


// dark mode
const themeToggle = document.getElementById('themeToggle');
let isDarkTheme = true;

// Initialize theme based on current state
document.body.classList.add(isDarkTheme ? 'dark-theme' : 'light-theme');
themeToggle.textContent = isDarkTheme ? 'Dark Mode' : 'Light Mode';

themeToggle.addEventListener('click', () => {
    // Toggle the theme class based on the current state
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme', isDarkTheme);
    document.body.classList.toggle('light-theme', !isDarkTheme);

    // Update the button text accordingly
    themeToggle.textContent = isDarkTheme ? 'Dark Mode' : 'Light Mode';
});
