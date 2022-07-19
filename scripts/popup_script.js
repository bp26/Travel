const popup = document.querySelector(".popup");
const login = document.querySelector(".login_button");
const popupContent = document.querySelector(".popup_content");
const linkAccount = document.querySelector(".link_account");
const popupButtonLink = document.querySelector(".popup_button_link");
const popupAccountsBlock = document.querySelector(".popup_accounts_block");
const popupTitle = document.querySelector(".popup_title");
const popupSignButton = document.querySelector("popup_sign_button");
const popupBelowText = document.querySelector(".popup_changeable_text");

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
    if (popupAccountsBlock.classList.contains("popup_accounts_hidden")) {
      popupSwitchClose();
    }
  }
});

/* Popup switch toggle */

function popupSwitchOpen() {
  popupAccountsBlock.classList.toggle("popup_accounts_hidden");
  popupTitle.innerHTML = "Create account";
  popupSignButton.innerHTML = "Sign Up";
  popupBelowText.innerHTML = "Already have an account?";
  popupButtonLink.innerHTML = "Log In";
}

function popupSwitchClose() {
  popupAccountsBlock.classList.toggle("popup_accounts_hidden");
  popupTitle.innerHTML = "Log in to your account";
  popupSignButton.innerHTML = "Sign In";
  popupBelowText.innerHTML = "Don't have an account?";
  popupButtonLink.innerHTML = "Register";
}

popupButtonLink.addEventListener("click", (event) => {
  popupSwitchOpen();
});
