let toggleBtn = document.getElementById("toggle-btn");
let menuItems = document.querySelectorAll(".contact-pop-out a");
let menuActive = false;
toggleBtn.addEventListener("click", () => {
    if (!menuActive) {
        menuItems[0].style.transform = "translate(0, -120px)";
        menuItems[1].style.transform = "translate(-70px, -80px)";
        menuItems[2].style.transform = "translate(-100px, -0px)";
        menuActive = true;
        toggleBtn.classList.add("pop-out-active");
    } else {
        menuItems.forEach((menuItem) => {
            menuItem.style.transform = "translate(0,0)";
        });
        menuActive = false;
        toggleBtn.classList.remove("pop-out-active");
    }
});


const navbarContainer = document.querySelector("#navbar-container");

function navbarBackground() {
    let windowPosition = window.scrollY;

    if (windowPosition > 150) {
        navbarContainer.classList.add("show-background")
    }
    else {
        navbarContainer.classList.remove("show-background")
    }
}
window.addEventListener("scroll", navbarBackground)


const navbarBurger = document.querySelector(".navbar-toggle-icon");
const navbarPopUp = document.querySelector(".nav-inside-container");
let i = 0;
function addBlackBackground() {
    if (i == 0) {
        navbarPopUp.classList.add("show-background");
        i++;
    }
    else {
        navbarPopUp.classList.remove("show-background");
        i = 0;
    }
}

navbarBurger.addEventListener("click", addBlackBackground)



