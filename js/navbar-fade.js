"use strict";

let whereToListenScroll = document.querySelector("body");
const ifParrallax = document.querySelector("body").classList.contains("trajets__body");
const navbar = document.querySelector("header");

// assign where to scroll
function checkIfParallax() {
  if (ifParrallax) {
    whereToListenScroll = document.querySelector(".js-parallax-container");
  } else {
    whereToListenScroll = window;
    return;
  }
}
// on page load run function
const checkOnLoad = checkIfParallax();

// change scroll method depending of el or window
whereToListenScroll.addEventListener("scroll", function () {
  if (ifParrallax) {
    if (whereToListenScroll.scrollTop >= 60) {
      navbar.classList.add("scroll-down");
    } else {
      navbar.classList.remove("scroll-down");
    }
  } else {
    if (whereToListenScroll.scrollY >= 60) {
      navbar.classList.add("scroll-down");
    } else {
      navbar.classList.remove("scroll-down");
    }
  }
});
