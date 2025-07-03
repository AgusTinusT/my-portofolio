document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("current-year").textContent =
        new Date().getFullYear();

    const hamburgerButton = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");

    const mobileMenuLinks = mobileMenu.querySelectorAll("a");

    hamburgerButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });

    mobileMenuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
    });

    const darkModeTogglers =
        document.querySelectorAll(".dark-mode-toggler");
    const htmlElement = document.documentElement;

    function applyTheme() {
        if (
            localStorage.getItem("theme") === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            htmlElement.classList.add("dark");
        } else {
            htmlElement.classList.remove("dark");
        }
    }

    function toggleTheme() {
        if (htmlElement.classList.contains("dark")) {
            htmlElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            htmlElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    }

    darkModeTogglers.forEach((toggler) => {
        toggler.addEventListener("click", toggleTheme);
    });

    applyTheme();
});