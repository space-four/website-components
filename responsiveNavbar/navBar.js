const mainNav = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

// Function listens for a Click. Gets value from data-visible, which is an attribute of main-navigation HTML Tag in index.html. Then does the old switcheroo on that attribute.

navToggle.addEventListener('click', () => {
    const visibility = mainNav.getAttribute('data-visible');

    if (visibility === "false") {
        mainNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        mainNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})