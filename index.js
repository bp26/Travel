const navigation_header = document.querySelector(".navigation_header");
const burger = document.querySelector(".burger");
const link = document.querySelectorAll(".link");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

function toggleOpen() {
  navigation_header.setAttribute("data-visible", "true");
  overlay.setAttribute("data-visible", "true");
  body.classList.add("fixed");
}

function toggleClosed() {
  navigation_header.setAttribute("data-visible", "false");
  overlay.setAttribute("data-visible", "false");
  body.classList.remove("fixed");
}

burger.addEventListener("click", () => {
  const expanded = navigation_header.getAttribute("data-visible");
  if (expanded === "false") {
    toggleOpen();
  } else {
    toggleClosed();
  }
});

link.forEach(function (link) {
  link.addEventListener("click", () => {
    const expanded = navigation_header.getAttribute("data-visible");
    if (expanded === "true") {
      toggleClosed();
    }
  });
});

overlay.addEventListener("click", () => {
  const expanded = navigation_header.getAttribute("data-visible");
  if (expanded === "true") {
    toggleClosed();
  }
});

const screenWidth = window.matchMedia("(min-width: 391px)");
screenWidth.addEventListener("change", () => {
  if (screenWidth.matches) {
    toggleClosed();
  }
});
