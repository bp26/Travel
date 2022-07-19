const popup = document.querySelector(".popup");
const login = document.querySelector(".login_button");
const popupContent = document.querySelector(".popup_content");
const linkAccount = document.querySelector(".link_account");

function popupOpenClose() {
  document.body.classList.toggle("fixed");
  popup.classList.toggle("popup_open");
  popupContent.classList.toggle("popup_content_transform");
}

login.addEventListener("click", (event) => {
  popupOpenClose();
});

linkAccount.addEventListener("click", (event) => {
  popupOpenClose();
  event.preventDefault();
});

popup.addEventListener("click", (event) => {
  console.log(event);
  if (event.target.classList.contains("popup")) {
    popupOpenClose();
  }
});
