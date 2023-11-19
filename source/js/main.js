var navButtonIn = document.getElementById("nav-button-in");
var styleMobileSide = document.querySelector('.mobile-side');
var navMenu = document.getElementById("nav-menu");
var mobileNav = document.getElementById("mobile-nav");
var windowNav = document.getElementById("window-nav");

function checkWindowWidth() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth < 767) {
        // navMenu.style.display = "none";
        navButtonIn.style.removeProperty('display');
        mobileNav.appendChild(navMenu);
    } else if (windowWidth >= 768 && windowWidth <= 1023) {
        var isPortrait = window.innerHeight > window.innerWidth;
        if (isPortrait) {
            // navMenu.style.display = "none";
            navButtonIn.style.removeProperty('display');
            mobileNav.appendChild(navMenu);
        } else {
            // navMenu.style.removeProperty('display');
            navButtonIn.style.display = "none";
            windowNav.appendChild(navMenu);
        }
    } else if (windowWidth > 1024) {
        // navMenu.style.removeProperty('display');
        navButtonIn.style.display = "none";
        windowNav.appendChild(navMenu);
    }
}

window.addEventListener('resize', checkWindowWidth);
checkWindowWidth();

document.getElementById("nav-button-in").addEventListener("click", function(){
    var mobileSide = document.getElementById("mobile-side");
    var styleMobileSide = document.querySelector('.mobile-side');
    styleMobileSide.style.animation = 'r-slide-in 0.25s ease-out forwards';
    mobileSide.style.removeProperty('display');
});

document.getElementById("nav-button-out").addEventListener("click", function(){
    styleMobileSide.style.animation = 'r-slide-out 0.25s ease-out forwards';
});

window.addEventListener('click', function (event) {
    if (event.target.closest("#mobile-side") === null && event.target.closest("#nav-button-in") === null) {
        styleMobileSide.style.animation = 'r-slide-out 0.25s ease-out forwards';
    }
});