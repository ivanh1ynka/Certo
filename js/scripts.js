// ********** Burger Mobile Menu **********
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      body.classList.remove("locked");
      burger.classList.remove("active-burger");
    }
  });
  const itemLink = document.querySelectorAll(".menu__item-link");
  itemLink.forEach(function (itemLink) {
    itemLink.addEventListener("click", () => {
      body.classList.remove("locked");
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      console.log("afafafa");
    });
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();