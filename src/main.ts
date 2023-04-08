import "./style.css";

const menuOpen = document.querySelector(".open-menu") as HTMLImageElement;
const menuClose = document.querySelector(".close-menu") as HTMLImageElement;
const navBar = document.querySelector(".navbar") as HTMLElement;
const backdrop = document.querySelector(".backdrop") as HTMLDivElement;

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

function openMenu() {
  navBar.style.scale = "1 1";
  backdrop.style.scale = "1 1";
}

function closeMenu() {
  navBar.style.scale = "0 1";
  backdrop.style.scale = "0 1";
}
