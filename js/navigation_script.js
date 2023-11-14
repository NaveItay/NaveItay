// Navigation BAR

const menuIcon = document.querySelector(".menuIcon");
const navBar = document.querySelector(".navbar");
const navBtns = document.querySelectorAll(".nav-menu-btn");

menuIcon.onclick = function () {
    navBar.classList.toggle("showNav");
    menuIcon.classList.toggle("change");
}

navBtns.forEach(navBtn => {
    navBtn.onclick = function () {
        navBar.classList.remove("showNav");
        menuIcon.classList.remove("change");
    }
});



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')


function scrollActive() {
    const scrollY = window.scrollY;
    const scrollTopElement = document.getElementById('scroll-top'); // Get the scroll-top element

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 70;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            scrollTopElement.style.display = 'block'; // Show the scroll-top element
        } else {
            scrollTopElement.style.display = 'none'; // Hide the scroll-top element
        };
    });
};


window.addEventListener('scroll', scrollActive)

// Scroll button
function scrollTop() {
    let scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) 
        scrollTop.classList.add('show-scroll'); 
    else 
        scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollTop)