const headingTypeOfDeveloper = document.querySelector('.heading-type-developer');
const typeOfDeveloper = document.querySelector('.type-developer');
const typeOfDeveloperImg = document.querySelector('.dev-img');
const name = document.querySelector('.name');
const cv = document.querySelector('.cv');
const navbarMenu = document.querySelector('.navbar-menu');
const resNavbar = document.querySelector('.responsive-navigation'); 

// Store the default values
const defaultHeading = headingTypeOfDeveloper.textContent;
const defaultType = typeOfDeveloper.textContent;
const defaultImg = typeOfDeveloperImg.src;

// Values to switch between
const states = [
    {
        heading: defaultHeading,
        type: defaultType,
        img: defaultImg
    },
    {
        heading: 'Junior Back-end',
        type: 'back-end',
        img: './images/BE.png'
    },
    {
        heading: 'Junior Full-Stack',
        type: 'full-stack',
        img: './images/FS.png'
    }
];

let currentState = 0;

function animateSwitch() {
    headingTypeOfDeveloper.classList.add('switch-animate', 'switch-glow');
    typeOfDeveloper.classList.add('switch-animate', 'switch-glow');
    typeOfDeveloperImg.classList.add('switch-animate', 'switch-pop');
    setTimeout(() => {
        headingTypeOfDeveloper.classList.remove('switch-animate');
        typeOfDeveloper.classList.remove('switch-animate');
        typeOfDeveloperImg.classList.remove('switch-animate');
    }, 400);
    setTimeout(() => {
        headingTypeOfDeveloper.classList.remove('switch-glow');
        typeOfDeveloper.classList.remove('switch-glow');
        typeOfDeveloperImg.classList.remove('switch-pop');
    }, 900);
}

setInterval(() => {
    currentState = (currentState + 1) % states.length;
    animateSwitch();
    setTimeout(() => {
        headingTypeOfDeveloper.textContent = states[currentState].heading;
        typeOfDeveloper.textContent = states[currentState].type;
        typeOfDeveloperImg.src = states[currentState].img;
    }, 200); // Change value mid-animation
}, 2000);

navbarMenu.addEventListener('click', () => {
    resNavbar.classList.toggle('hiding');
})

