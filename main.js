let body = document.body;
let container = document.querySelector(".container");
let menuIcon = document.querySelector(".header__menu-icon img");
let nav = document.querySelector(".header__nav");
let closeIcon = document.querySelector(".nav__close-icon img");
let allNavItemsWithSubmenu = document.querySelectorAll(".nav__item--has-submenu");

container.addEventListener("click", (e) => {
  let navItemWithSubmenu = e.target.closest(".nav__item--has-submenu");

  if (e.target == menuIcon) {
    body.classList.add("inactive");
    nav.classList.add("active");
  } else if (e.target == closeIcon) {
    body.classList.remove("inactive");
    nav.classList.remove("active");
  } else if (navItemWithSubmenu) {
    allNavItemsWithSubmenu.forEach((item) => {
      item.classList.add("inactive");
      item.classList.remove("active");
    });
    navItemWithSubmenu.classList.remove("inactive");
    navItemWithSubmenu.classList.add("active");
  } else {
    allNavItemsWithSubmenu.forEach((item) => {
      item.classList.add("inactive");
      item.classList.remove("active");
    });
  }
});
