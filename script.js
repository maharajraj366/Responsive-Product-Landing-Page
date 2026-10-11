
/* EcoLife JavaScript */

// Mobile menu
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("mobile-open");

    if (navLinks.classList.contains("mobile-open")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    }
});

// Close menu after selecting a link
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("mobile-open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    });
});

// Show a message when a product is chosen
const productButtons = document.querySelectorAll(".add-button");
const message = document.getElementById("message");
let messageTimer;

productButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const productName = button.getAttribute("data-product");

        message.textContent = productName + " selected!";
        message.classList.add("show");

        clearTimeout(messageTimer);

        messageTimer = setTimeout(function () {
            message.classList.remove("show");
        }, 2500);
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const section = document.querySelector(this.getAttribute("href"));

        if (section) {
            event.preventDefault();

            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
