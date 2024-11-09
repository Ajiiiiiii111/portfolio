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

// Remove the manual visibility for Home
// document.querySelector('#home').classList.add('visible');  // This line is no longer needed

// Observer options to trigger when 10% of the section is visible
const observerOptions = {
  root: null, // Use the viewport as the root
  rootMargin: '0px',
  threshold: 0.15// Trigger when 10% of the section is visible
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
    img.src = isDarkTheme ? 'moon.png' : 'sun.png'; // Replace with your actual image paths
    img.alt = isDarkTheme ? 'Dark Mode' : 'Light Mode'; // Accessibility text

    // size of the image in btn
    img.style.width = '30px'; 
    img.style.height = '30px'; 

    themeToggle.innerHTML = ''; // Clear the previous content
    themeToggle.appendChild(img); // Append the new image
}

// Initialize theme based on the current state
document.body.classList.add(isDarkTheme ? 'dark-theme' : 'light-theme');
setToggleImage(); // Set the image on load

themeToggle.addEventListener('click', () => {
    // Toggle the theme class based on the current state
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme', isDarkTheme);
    document.body.classList.toggle('light-theme', !isDarkTheme);

    // Update the button with the new image
    setToggleImage();
});

