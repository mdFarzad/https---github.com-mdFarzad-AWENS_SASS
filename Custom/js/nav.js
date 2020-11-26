/*function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 2 + 1.5}s';
    });

}*/

$(document).ready(function () {
    $('.dropdown-button').dropdown({
        constrainWidth: false,
        hover: false,
        onclick: true,
        belowOrigin: true,
        alignment: 'left'
    });
    $('.inPerson-us-dropdown').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: ($('.dropdown-content').width() * 3) / 2.5 + 5, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });

    // JAVASCRIPT START HERE //

    $('.button-collapse').sideNav({
        menuWidth: 300,
        closeOnClick: true,
        edge: 'right', // <--- CHECK THIS OUT
    });
    $('.collapsible').collapsible();
});
