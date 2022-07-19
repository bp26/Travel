const popup = document.querySelector(".popup");
const login = document.querySelector(".login_button");
const popupContent = document.querySelector(".popup_content");
const linkAccount = document.querySelector(".link_account");
const popupButtonLink = document.querySelector(".popup_button_link");
const popupAccountsBlock = document.querySelector(".popup_accounts_block");

/* Popup open-close toggle */

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

/* Popup switch toggle */

popupButtonLink.addEventListener("click", (event) => {
  popupAccountsBlock.classList.toggle("popup_accounts_hidden");
});
