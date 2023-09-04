const openMenu = document.querySelector('.menu-bars');
const sideBar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

openMenu.addEventListener('click', () => {
    sideBar.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('active');
});

overlay.addEventListener('click', () => {
    sideBar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('active');
});


/*-------navbar-----*/

const navBar = document.querySelector('.navbar-div');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 140) {
        navBar.classList.add('active');
    } else {
        navBar.classList.remove('active');
    }
});
