document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const nav = document.querySelector("nav");

   
    nav.classList.add("nav-visible");


    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

});
