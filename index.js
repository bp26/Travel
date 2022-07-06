const navigation_header = document.querySelector(".navigation_header");
const burger = document.querySelector(".burger");
const link = document.querySelectorAll(".link");
const overlay = document.querySelector('.overlay')

burger.addEventListener("click", () => {
const expanded = navigation_header.getAttribute("data-visible");
if (expanded === "false") {
    navigation_header.setAttribute("data-visible", "true");
    overlay.setAttribute("data-visible", "true");
} else if (expanded === "true") {
    navigation_header.setAttribute("data-visible", "false");
    overlay.setAttribute("data-visible", "false");
}
});

link.forEach(function (link) {
link.addEventListener("click", () => {
    const expanded = navigation_header.getAttribute("data-visible");
    if (expanded === "true") {
    navigation_header.setAttribute("data-visible", "false");
    overlay.setAttribute("data-visible", "false");
    }
});
});

overlay.addEventListener("click", () => {
    const expanded = navigation_header.getAttribute("data-visible");
    if (expanded === "true") {
        navigation_header.setAttribute("data-visible", "false");
        overlay.setAttribute("data-visible", "false");
    }
    })