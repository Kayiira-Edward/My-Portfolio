const mobileNavToggle = document.querySelector('.fa-bars');
const primaryNavigation = document.querySelector('#primary-navigation');

mobileNavToggle.addEventListener('click', () => {
    const isVisible = primaryNavigation.getAttribute('data-visible');

    if (isVisible === "false") {
        primaryNavigation.setAttribute('data-visible', true);
        mobileNavToggle.classList.add('open');
    } else if (isVisible === "true") {
        primaryNavigation.setAttribute('data-visible', false);
        mobileNavToggle.classList.remove('open');
    }
});

document.addEventListener('click', (event) => {
    const isNavOpen = primaryNavigation.getAttribute('data-visible') === "true";
    const isClickInsideNav = primaryNavigation.contains(event.target) || mobileNavToggle.contains(event.target);

    if (isNavOpen && !isClickInsideNav) {
        primaryNavigation.setAttribute('data-visible', false);
        mobileNavToggle.classList.remove('open');
    }
});
// Close nav when the "X" button is clicked
document.querySelector('.fa-circle-xmark').addEventListener('click', () => {
    primaryNavigation.setAttribute('data-visible', false);
    mobileNavToggle.classList.remove('open');
});
