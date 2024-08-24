import "./css/style.css";
import "./css/main.css";
import "./css/menu.css";
import "./css/about.css";
import { about } from "./modules/about.js";
import { main } from "./modules/mainPage.js";
import { menu } from "./modules/menu.js";

const container = document.querySelector("#content");

const mainBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

mainBtn.addEventListener("click", () => {
  if (container.firstChild) {
    container.textContent = "";
  }
  main(container);
})

menuBtn.addEventListener("click", () => {
  if (container.firstChild) {
    container.textContent = "";
  }
  menu(container);
})

aboutBtn.addEventListener("click", () => {
  if (container.firstChild) {
    container.textContent = "";
  }
  about(container);
})
console.log("test");
