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
const addMenu = () => {
  const extra = document.querySelector(".menuExtra");
  extra.addEventListener("click", () => {
    changeAndClose();
    menu(container);
  })
}
addMenu();

const mainBtn = document.querySelector("#home");
const menuBtns = document.querySelectorAll(".menu");
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
  addMenu();
})

//menuBtns.addEventListener("click", () => {
//  changeAndClose();
//  menu(container);
//})

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
}

menuBtn.addEventListener("click", toggleMenu);
navUl.addEventListener("click", toggleMenu);


