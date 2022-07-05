const navigation_header = document.querySelector('.navigation_header');
const burger = document.querySelector('.burger');
const navLink = document.querySelector('.nav_link a');

burger.addEventListener('click', () => {
    const expanded = navigation_header.getAttribute('data-visible');
    if (expanded === 'false') {
        navigation_header.setAttribute('data-visible', 'true')
    } else if (expanded === 'true') {
        navigation_header.setAttribute('data-visible', 'false')
    }
})

