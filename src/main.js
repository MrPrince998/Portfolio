const hamMenu = document.getElementById('menu');
const crossMenu = document.getElementById('cross');
let navLinks = document.querySelector(".nav-links");
let menuBtn = document.querySelector(".menu-btn");

// add underline on nav links
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function () {
    // remove 'active' class from active page
    document.querySelectorAll(".nav-links a").forEach(item => item.classList.remove("active"));
    // add 'active' class in clicked page
    this.classList.add("active");
  });
});

// change display property when click
document.getElementById("menu").addEventListener("click", () => {
  hamMenu.style.display="none";
  crossMenu.style.display="block";
});

document.getElementById("cross").addEventListener('click',() =>{
  crossMenu.style.display="none";
  hamMenu.style.display="block";
})

//show nav links when menu is clicked
menuBtn.addEventListener("click", () => {
  navLinks.hasAttribute("data-visible") ? menuBtn.setAttribute("aria-expanded", true) : menuBtn.setAttribute("aria-expanded", false);
  navLinks.toggleAttribute("data-visible");
})

// if navigation bar reset to it's orginal state
window.addEventListener("resize", () =>{
  if(window.innerWidth >=768) {
    navLinks.removeAttribute("data-visible"); //hide mobile menu on larger screen
    menuBtn.setAttribute("aria-expanded", "false"); //reset to it's orginal state
    crossMenu.style.display="none"; 
    hamMenu.style.display="block";
  }
})

document.addEventListener("click", (event) => {
  let navLinks = document.querySelector(".nav-links");
  let menuBtn = document.querySelector(".menu-btn");

  // Check if the menu is open
  let isMenuOpen = navLinks.hasAttribute("data-visible");

  // Check if the clicked element is NOT part of the menu or button
  if (isMenuOpen && !navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
      navLinks.removeAttribute("data-visible"); // Close menu
      menuBtn.setAttribute("aria-expanded", "false"); // Reset button state
      crossMenu.style.display="none"; 
      hamMenu.style.display="block";
  }
});


var typed = new Typed(".profession",{
  strings: ["Web Developer", "Web Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay:1000,
  loop: true
})
