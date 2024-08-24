import "./css/style.css";
import "./css/main.css";
import "./css/menu.css";
import "./css/about.css";
import { about } from "./modules/about.js";
import { main } from "./modules/mainPage.js";
import { menu } from "./modules/menu.js";


const container = document.querySelector("#content");

// hamburger menu

const menuBtn = document.querySelector(".menuBtn");
const navUl = document.querySelector(".navUl");

const toggleMenu = () => {
  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = '';
  } else {
    document.body.style.overflow = 'hidden';
  }
  navUl.classList.toggle("invisible");
  navUl.classList.toggle("menuShow");
  console.log("togglemenu");
  event.stopPropagation();
}

menuBtn.addEventListener("click", toggleMenu);
navUl.addEventListener("click", toggleMenu);


// main div content
const mainBtn = document.querySelector("#home");
const menuBtns = document.querySelectorAll(".menu");
const aboutBtn = document.querySelector("#about");

const changeAndClose = () => {
  if (container.firstChild) {
      container.innerHTML = "";
  }
  toggleMenu();
}

mainBtn.addEventListener("click", () => {
  changeAndClose();
  main(container);
  addMenu();
})

aboutBtn.addEventListener("click", () => {
  changeAndClose();
  about(container);
})

menuBtns.forEach((element) => {
  element.addEventListener("click", () => {
    changeAndClose();
    menu(container);
  })
})
// main page on start;
main(container);
const addMenu = () => {
  const extra = document.querySelector(".menuExtra");
  extra.addEventListener("click", () => {
    changeAndClose();
    menu(container);
  })
}
addMenu();
