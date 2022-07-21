/* Common*/
const destinationPictures = document.querySelector(".destination_pictures");
const destinationSliderDiv = document.querySelectorAll(
  ".destination_slider_div"
);


/* Mobile slider */

const destinationDiv1 = document.querySelector(".destination_div1");
const destinationDiv2 = document.querySelector(".destination_div2");
const destinationDiv3 = document.querySelector(".destination_div3");
const previousSlideButton = document.querySelector(".previous_slide_button");
const nextSlideButton = document.querySelector(".next_slide_button");
const pixelMobile1 = document.querySelector('.pixel_mobile1');
const pixelMobile2 = document.querySelector('.pixel_mobile2');
const pixelMobile3 = document.querySelector('.pixel_mobile3');
const arrowLeftImg = document.querySelector('.arrow_image_left');
const arrowRightImg = document.querySelector('.arrow_image_right')


previousSlideButton.addEventListener("click", (event) => {

  if (destinationDiv2.classList.contains("slider_active")) {
    destinationDiv2.classList.remove("slider_active");
    destinationDiv1.classList.add("slider_active");
    pixelMobile2.classList.remove('pixel_button_active')
    pixelMobile1.classList.add('pixel_button_active')
    arrowLeftImg.setAttribute('src', 'img/destinations_arrow1.svg');
    arrowLeftImg.classList.remove('arrow_transform')

  } else if (destinationDiv3.classList.contains('slider_active')) {
    destinationDiv3.classList.remove('slider_active');
    destinationDiv2.classList.add('slider_active')
    pixelMobile3.classList.remove('pixel_button_active')
    pixelMobile2.classList.add('pixel_button_active')
    arrowRightImg.setAttribute('src', 'img/destinations_arrow.svg');
    arrowRightImg.classList.remove('arrow_transform')
  }
});

nextSlideButton.addEventListener("click", (event) => {

  if (destinationDiv2.classList.contains("slider_active")) {
    destinationDiv2.classList.remove("slider_active");
    destinationDiv3.classList.add("slider_active");
    pixelMobile2.classList.remove('pixel_button_active')
    pixelMobile3.classList.add('pixel_button_active')
    arrowRightImg.setAttribute('src', 'img/destinations_arrow1.svg');
    arrowRightImg.classList.add('arrow_transform')

  } else if (destinationDiv1.classList.contains("slider_active")) {
    destinationDiv1.classList.remove("slider_active");
    destinationDiv2.classList.add("slider_active");
    pixelMobile1.classList.remove('pixel_button_active')
    pixelMobile2.classList.add('pixel_button_active')
    arrowLeftImg.setAttribute('src', 'img/destinations_arrow.svg');
    arrowLeftImg.classList.add('arrow_transform')
  }
});
