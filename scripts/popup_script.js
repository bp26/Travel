const popup = document.querySelector(".popup");
const login = document.querySelector(".login_button");
const popupContent = document.querySelector(".popup_content");
const linkAccount = document.querySelector(".link_account");
const popupButtonLink = document.querySelector(".popup_button_link");
const popupAccountsBlock = document.querySelector(".popup_accounts_block");
const popupTitle = document.querySelector(".popup_title");
const popupSignButton = document.querySelector(".popup_sign_button");
const popupBelowText = document.querySelector(".popup_changeable_text");
const popupForgetPassword = document.querySelector(".popup_forget_password");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

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
  popupForgetPassword.classList.toggle("popup_hidden_forget_password");
  popupTitle.innerHTML = "Create account";
  popupBelowText.innerHTML = "Already have an account?";
  popupButtonLink.innerHTML = "Log In";
  popupSignButton.innerHTML = "Sign Up";
}

function popupSwitchClose() {
  popupAccountsBlock.classList.toggle("popup_accounts_hidden");
  popupForgetPassword.classList.toggle("popup_hidden_forget_password");
  popupTitle.innerHTML = "Log in to your account";
  popupBelowText.innerHTML = "Don't have an account?";
  popupButtonLink.innerHTML = "Register";
  popupSignButton.innerHTML = "Sign In";
}

popupButtonLink.addEventListener("click", (event) => {
  if (popupButtonLink.innerHTML !== "Log In") {
    popupSwitchOpen();
  } else {
    popupSwitchClose();
  }
});

/*Popup Input Alert*/

popupSignButton.addEventListener("click", (event) => {
  alert(`E-mail: ${email.value}\nPassword: ${password.value}`);
});
