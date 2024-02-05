let navbars = document.querySelectorAll(".navbar");
let mobileNavbarBtn = document.querySelector(".mobile-navbar .free-notion-btn")
let languageContainer = document.querySelector('.language-container')

function openNavbar(){
    navbars.forEach(function(navbar) {
        if (navbar.style.display === "none" || navbar.style.display === "") {
            navbar.style.display = "flex";
            mobileNavbarBtn.style.display = "none";
        } else {
            navbar.style.display = "none";
            mobileNavbarBtn.style.display = "inline-block";
        }
    });
}

function toggleLanguage(){
    if(languageContainer.style.display === "block"){
        languageContainer.style.display = "none";
    } else {
        languageContainer.style.display = "block";
    }
}

window.addEventListener('resize', () => {
    navbars.forEach(function(navbar) {
        if (window.innerWidth > 1080) {
            navbar.style.display = "flex";
            mobileNavbarBtn.style.display = "none";
        } else {
            navbar.style.display = "none";
        }
    });
});

window.addEventListener('click', function(event) {
    if (!languageContainer.contains(event.target) && event.target.tagName !== 'BUTTON') {
      languageContainer.style.display = 'none';
    }
});