"use strict";

let parallaxContainer = document.querySelector(".js-parallax-container");
let navbar = document.getElementsByTagName("header")[0];

/* onscroll function */
parallaxContainer.addEventListener("scroll", function () {
  if (parallaxContainer.scrollTop >= 60) {
    navbar.classList.add("scroll-down");
  } else {
    navbar.classList.remove("scroll-down");
  }
});
