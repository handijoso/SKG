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

const observer = new IntersectionObserver((enteries) => {
    enteries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove("show")
        }
    })
})

const animateContents = document.querySelectorAll(".content");
animateContents.forEach((el) => observer.observe(el));
