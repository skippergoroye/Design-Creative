/*=============== Hambuger Menu ===============*/
// const navToggle = document.querySelector(".nav__toggle");
// const navLinks = document.querySelector(".nav__links");
// const navIcon = navToggle.querySelector("i");

// navToggle.addEventListener("click", () => {
//   navLinks.classList.toggle("show-menu");

//    // Change icon
//   navIcon.classList.toggle("ri-menu-line");
//   navIcon.classList.toggle("ri-close-line");
// });


document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelector(".nav__links");
  const navIcon = navToggle.querySelector("i");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");

    navIcon.classList.toggle("ri-menu-line");
    navIcon.classList.toggle("ri-close-line");
  });
});

