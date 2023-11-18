var navMenu = document.getElementById("nav-menu");
var navButtonIn = document.getElementById("nav-button-in");

function checkWindowWidth() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth < 767) {
        navMenu.style.display = "none";
        navButtonIn.style.removeProperty('display');
    } else if (windowWidth >= 768 && windowWidth <= 1023) {
        var isPortrait = window.innerHeight > window.innerWidth;
        if (isPortrait) {
            navMenu.style.display = "none";
            navButtonIn.style.removeProperty('display');
        } else {
            navMenu.style.removeProperty('display');
            navButtonIn.style.display = "none";
        }
    } else if (windowWidth > 1024) {
        navMenu.style.removeProperty('display');
        navButtonIn.style.display = "none";
    }
}

window.addEventListener('resize', checkWindowWidth);
checkWindowWidth();

document.getElementById("nav-button-in").addEventListener("click", function(){
    var mobileSide = document.getElementById("mobile-side");
    var styleMobileSide = document.querySelector('.mobile-side');
    styleMobileSide.style.animation = 'r-slide-in 0.25s ease-out forwards';
    mobileSide.style.removeProperty('display');
    console.log(mobileSide);
});

document.getElementById("nav-button-out").addEventListener("click", function(){
    var styleMobileSide = document.querySelector('.mobile-side');
    styleMobileSide.style.animation = 'r-slide-out 0.25s ease-out forwards';
});
