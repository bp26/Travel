/*Navigation menu */

const navigation_header = document.querySelector(".navigation_header");
const burger = document.querySelector(".burger");
const link = document.querySelectorAll(".link");
const overlay = document.querySelector(".overlay");
const cross = document.querySelector(".cross");
const account = document.querySelector(".link_account");

function toggleOpen() {
  navigation_header.setAttribute("toggled-open", "true");
  overlay.setAttribute("toggled-open", "true");
  burger.setAttribute("toggled-open", "true");
  cross.setAttribute("toggled-open", "true");
  document.body.classList.add("fixed");
}

function toggleClose() {
  navigation_header.setAttribute("toggled-open", "false");
  overlay.setAttribute("toggled-open", "false");
  burger.setAttribute("toggled-open", "false");
  cross.setAttribute("toggled-open", "false");
  if (popup.classList.contains("popup_open") === false) {
    document.body.classList.remove("fixed");
  }
}

burger.addEventListener("click", () => {
  const expanded = navigation_header.getAttribute("toggled-open");
  if (expanded === "false") {
    toggleOpen();
  }
});

cross.addEventListener("click", () => {
  const expanded = navigation_header.getAttribute("toggled-open");
  if (expanded === "true") {
    toggleClose();
  }
});

link.forEach(function (link) {
  link.addEventListener("click", () => {
    const expanded = navigation_header.getAttribute("toggled-open");
    if (expanded === "true") {
      toggleClose();
    }
  });
});

account.addEventListener("click", () => {
  const expanded = navigation_header.getAttribute("toggled-open");
  if (expanded === "true") {
    toggleClose();
  }
});

overlay.addEventListener("click", () => {
  const expanded = navigation_header.getAttribute("toggled-open");
  if (expanded === "true") {
    toggleClose();
  }
});

const screenWidth = window.matchMedia("(min-width: 391px)");
screenWidth.addEventListener("change", () => {
  if (screenWidth.matches) {
    toggleClose();
  }
});

console.log(
  "Оценка: 85 баллов\nВёрстка соответствует макету. Ширина экрана 390px - 48 баллов\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nНа ширине экрана 390рх и меньше реализовано адаптивное меню +22"
);
