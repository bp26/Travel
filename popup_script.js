const popup = document.querySelector(".popup");
const login = document.querySelector(".login_button");

if (popup.classList.contains("popup_open") === false) {
  login.addEventListener("click", (event) => {
    popup.classList.add("popup_open");
  });
}

if (popup.classList.contains("popup_open") === true) {
  popup.addEventListener("click", (event) => {
    console.log(event.target);
    popup.classList.remove("popup_open");
  });
}
