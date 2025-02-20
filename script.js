const headingTypeOfDeveloper = document.querySelector('.heading-type-developer');
const typeOfDeveloper = document.querySelector('.type-developer');
const typeOfDeveloperImg = document.querySelector('.dev-img');
const name = document.querySelector('.name');
const cv = document.querySelector('.cv');
const navbarMenu = document.querySelector('.navbar-menu');
const resNavbar = document.querySelector('.responsive-navigation'); 

setTimeout(() => {
    headingTypeOfDeveloper.textContent = 'Back-end';
    typeOfDeveloper.textContent = 'back-end';
    typeOfDeveloperImg.src = './images/BE.png';
}, 5000)

// TODO UNCOMMENT THIS AFTER GETTING A HANG OF THE BACKEND SIDE
// setTimeout(() => {
//     headingTypeOfDeveloper.textContent = 'Full-Stack';
//     typeOfDeveloper.textContent = 'full-stack';
//     typeOfDeveloperImg.src = './images/FS.png';
// }, 6000)

navbarMenu.addEventListener('click', () => {
    resNavbar.classList.toggle('hiding');
})

