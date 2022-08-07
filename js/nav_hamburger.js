const hamB = document.getElementsByClassName("ham-button")[0]
const nav_links = document.getElementsByClassName("nav-links")[0]
hamB.addEventListener("click", () => {
    nav_links.classList.toggle("active")
});