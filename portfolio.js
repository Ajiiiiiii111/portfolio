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

// Select all sections
const section = document.querySelectorAll('section');

// remove visibility for Home
// document.querySelector('#home').classList.add('visible');  // 

// trigger when 10% of the section is visible
const observerOptions = {
  root: null, // Use the viewport as the root
  rootMargin: '0px',
  threshold: 0.10// trigger when 10% of the section is visible
};

// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add 'visible' class when the section comes into view
    } else {
      entry.target.classList.remove('visible'); // Remove 'visible' class when the section goes out of view
    }
  });
}, observerOptions);

// Start observing each section
sections.forEach(section => {
  observer.observe(section); // Observe all sections, including the Home section
});



// dark mode
const themeToggle = document.getElementById('themeToggle');
let isDarkTheme = true;

// Function to set the correct image based on the theme
function setToggleImage() {
  const img = document.createElement('img');
  img.src = isDarkTheme ? 'moon.png' : 'sun.png'; 
  img.alt = isDarkTheme ? 'Dark Mode' : 'Light Mode'; 

  img.style.width = '30px';  // size in btnchange
  img.style.height = '30px';

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
      themeToggle.innerHTML = ''; // Clear previous content
      themeToggle.appendChild(img); // Append the new image
  }
}

document.body.classList.add(isDarkTheme ? 'dark-theme' : 'light-theme');
setToggleImage(); 

themeToggle.addEventListener('click', () => {
    // toggle the theme class based on the current state
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme', isDarkTheme);
    document.body.classList.toggle('light-theme', !isDarkTheme);

    // update the button with the new image
    setToggleImage();
});
