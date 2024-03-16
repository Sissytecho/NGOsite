const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navElemArr = [navOpenBtn, navCloseBtn];
for (let i =0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener('click', function (){
        navbar.classList.toggle("active");
    });
    
}
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function() {
    this.window.scrollY >=50 ? header.classList.add("active")
    :header.classList.remove("active");
});