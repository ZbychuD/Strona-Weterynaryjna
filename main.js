const scrollButtons = [...document.querySelectorAll(".menu__link")];
const animItems = [...document.querySelectorAll(".anim__item")];
const menuButton = document.querySelector(".mobile__openMenu");
const mobileMenu = document.querySelector(".mobile__menu");
const mobileLinks = document.querySelectorAll(".mobile__link");
const burger = document.querySelector(".fa-bars");

const btn = document.querySelector(".galery__showMore");
const section = document.querySelector(".galery");
const links = document.querySelectorAll(".galery__smallImage");
const imgs = document.querySelectorAll(".galery__bigImage");

scrollButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    animItems.forEach((item) => {
      item.classList.add("active");
      setTimeout(() => {
        item.classList.remove("active");
      }, 2000);
    });
  });
});

let activity = true;

btn.addEventListener("click", () => {
  if (activity) {
    section.classList.add("activity");
    links.forEach((link) => {
      link.style.display = "block";
    });
    btn.textContent = "Pokaż mniej";
    activity = !activity;
  } else {
    section.classList.remove("activity");
    links.forEach((link, index) => {
      console.log(link, index);
      if (index >= 3) {
        link.style.display = "none";
      } else return;
    });
    btn.textContent = "Pokaż więcej";
    activity = !activity;
  }
});

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    imgs[index].style.display = "block";
    imgs[index].addEventListener("click", () => {
      setTimeout(() => {
        imgs[index].style.display = "none";
      }, 200);
    });
  });
});

let active = true;
menuButton.addEventListener("click", () => {
  if (active === true) {
    mobileMenu.style.left = "0";
    menuButton.classList.add("active");
    active = !active;
  } else {
    mobileMenu.style.left = "-100%";
    menuButton.classList.remove("active");
    active = !active;
  }
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.style.left = "-100%";
    active = true;
  });
});
