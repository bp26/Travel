const navigation_header = document.querySelector(".navigation_header");
const burger = document.querySelector(".burger");
const link = document.querySelectorAll(".link");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

function toggleOpen() {
  navigation_header.setAttribute("toggled-open", "true");
  overlay.setAttribute("toggled-open", "true");
  body.classList.add("fixed");
}

function toggleClose() {
  navigation_header.setAttribute("toggled-open", "false");
  overlay.setAttribute("toggled-open", "false");
  body.classList.remove("fixed");
}

burger.addEventListener("click", () => {
  const expanded = navigation_header.getAttribute("toggled-open");
  if (expanded === "false") {
    toggleOpen();
  } else {
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
