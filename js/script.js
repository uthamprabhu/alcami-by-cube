document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const searchBtn = document.querySelector(".search-button")
    const searchBar = document.querySelector(".search-bar")

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    searchBtn.addEventListener("click", () => {
        navLinks.classList.toggle("search-active")
        searchBar.classList.toggle("active")
    })

});
