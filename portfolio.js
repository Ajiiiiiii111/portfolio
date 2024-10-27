let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

let menuIcon = document.querySelector('#menuicon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


    const themeToggle = document.getElementById('themeToggle');
    let isDarkTheme = true;

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme', !isDarkTheme);
        isDarkTheme = !isDarkTheme;

        themeToggle.textContent = isDarkTheme ? 'Dark Mode' : 'Light Mode';
    });



window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height){
            navLinks.forEach(link => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+ id + ']').classList.add('active');
            })
        }

    })
}