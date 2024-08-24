import "./css/style.css";
import "./css/main.css";
import "./css/menu.css";
import "./css/about.css";
import { about } from "./modules/about.js";
import { main } from "./modules/mainPage.js";
import { menu } from "./modules/menu.js";


const container = document.querySelector("#content");

// main page on start;
main(container);


const mainBtn = document.querySelector("#home");
const menuBtns = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

const changeAndClose = () => {
  if (container.firstChild) {
    if (container.firstChild) {
      container.innerHTML = "";
    }
    if (document.body.style.overflow === "hidden") {
      toggleMenu();
    }
  }
}

mainBtn.addEventListener("click", () => {
  changeAndClose();
  main(container);
})

menuBtns.addEventListener("click", () => {
  changeAndClose();
  menu(container);
})

aboutBtn.addEventListener("click", () => {
  changeAndClose();
  about(container);
})

// hamburger menu



const menuBtn = document.querySelector(".menuBtn");
const navUl = document.querySelector(".navUl");
const quitList = [menuBtns, menuBtn, navUl, mainBtn, aboutBtn];

const toggleMenu = () => {
  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = '';
  } else {
    document.body.style.overflow = 'hidden';
  }
  navUl.classList.toggle("invisible");
  navUl.classList.toggle("menuShow");
}

menuBtn.addEventListener("click", toggleMenu);


