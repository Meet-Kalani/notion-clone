let navbars = document.querySelectorAll(".navbar");
let languageContainer = document.querySelector('.language-container')

function openNavbar(){
    navbars.forEach(function(navbar) {
        if (navbar.style.display === "none" || navbar.style.display === "") {
            navbar.style.display = "flex";
        } else {
            navbar.style.display = "none";
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
        } else {
            navbar.style.display = "none";
        }
    });
});
