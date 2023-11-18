"use strict";

const hamburgerMenu = document.querySelector(".hamburger");

const sidebarLinks = document.querySelector(".sidebar-links");
const sidebarSettings = document.querySelector(".sidebar-settings");

hamburgerMenu.addEventListener("click", () => {
  sidebarLinks.classList.toggle("with-display");
  sidebarSettings.classList.toggle("with-display");
});
