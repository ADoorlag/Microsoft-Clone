const menuButton = document.querySelector(".menu-btn");
const menuList = document.querySelector(".main-menu");

menuButton.addEventListener("click", () => {
  menuList.classList.toggle("show");
});
