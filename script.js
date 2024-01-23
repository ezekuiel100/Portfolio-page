const menuBurguer = document.querySelector(".menu-burguer");
const navBar = document.querySelector("nav");

menuBurguer.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
});
