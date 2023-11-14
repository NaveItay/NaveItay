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
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;
    const scrollTopElement = document.getElementById('scroll-top');

    // console.log('Scroll Position:', scrollY);

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 70;
        const sectionId = current.getAttribute('id');

        // console.log('Section:', sectionId, 'Top:', sectionTop, 'Height:', sectionHeight);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // console.log('Activating:', sectionId);
            document.querySelector('.nav-menu-btn[href="#' + sectionId + '"]').classList.add('active');
            scrollTopElement.style.display = 'block';
        } else {
            // console.log('Deactivating:', sectionId);
            document.querySelector('.nav-menu-btn[href="#' + sectionId + '"]').classList.remove('active');
            scrollTopElement.style.display = 'none';
        }
    });
};


window.addEventListener('scroll', scrollActive)

// Scroll button
function scrollTop() {
    let scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (window.scrollY >= 200)
        scrollTop.classList.add('show-scroll');
    else
        scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollTop)
