const popup = document.querySelector(".popup");
const login = document.querySelector(".login_button");
const popupContent = document.querySelector('.popup_content')


login.addEventListener("click", (event) => {
  document.body.classList.toggle('fixed')
  popup.classList.toggle("popup_open");
  popupContent.classList.toggle('popup_content_transform')
});



popup.addEventListener("click", (event) => {
  console.log(event);
  if (event.target.classList.contains('popup'))
    document.body.classList.toggle('fixed')
    popup.classList.toggle("popup_open");
    popupContent.classList.toggle('popup_content_transform')
});



