let navbars = document.querySelectorAll(".navbar");
let mobileNavbarBtn = document.querySelector(".mobile-navbar .free-notion-btn")
let mobileNavbar = document.querySelector('.mobile-navbar');
let languageContainer = document.querySelector('.language-container')
let header = document.querySelector('header');
let body = document.body;

// navbar toggle for small devices
function openNavbar(){
    navbars.forEach(function(navbar) {
        if (navbar.style.display === "none" || navbar.style.display === "") {
            navbar.style.display = "flex";
            mobileNavbarBtn.style.display = "none";
            mobileNavbar.style.borderBottom = "1px solid #E4E4E5";
            mobileNavbar.style.paddingBottom = "16px";
            header.style.height = "100%";
            body.classList.add('navbar-open');
        } else {
            navbar.style.display = "none";
            mobileNavbarBtn.style.display = "inline-flex";
            mobileNavbar.style.borderBottom = "none";
            mobileNavbar.style.paddingBottom = "0";
            header.style.height = "auto";
            body.classList.remove('navbar-open');
        }
    });
}

// display navbar after exceeding 1080px even if it is closed in smaller devices
window.addEventListener('resize', () => {
    navbars.forEach(function(navbar) {
        if (window.innerWidth > 1080) {
            navbar.style.display = "flex";
            mobileNavbarBtn.style.display = "none";
            mobileNavbar.style.borderBottom = "none";
            mobileNavbar.style.paddingBottom = "0";
            header.style.height = "auto";
        } else {
            navbar.style.display = "none";
        }
    });
});

// language toggle
function toggleLanguage(){
    if(languageContainer.style.display === "block"){
        languageContainer.style.display = "none";
    } else {
        languageContainer.style.display = "block";
    }
}

// function for closing the language container when user clicks on any element which is not language container
window.addEventListener('click', function(event) {
    if (!languageContainer.contains(event.target) && event.target.tagName !== 'BUTTON') {
      languageContainer.style.display = 'none';
    }
});

// function for adding border on scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('header-border');
    } else {
        header.classList.remove('header-border');
    }
});