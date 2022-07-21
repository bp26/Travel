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


/* Desktop slider */

const destinationSliderDiv = document.querySelectorAll(".destination_slider_div");
const pixelDesktop1 = document.querySelector('.pixel_desktop1');
const pixelDesktop2 = document.querySelector('.pixel_desktop2');
const pixelDesktop3 = document.querySelector('.pixel_desktop3');

destinationSliderDiv.forEach((slide) => {

  destinationDiv1.addEventListener('click', (event) => {
    if (slide.classList.contains('destination_slider_left') === false) {
      slide.classList.add('destination_slider_left')
      pixelDesktop2.classList.remove('pixel_button_active')
      pixelDesktop1.classList.add('pixel_button_active')
    }
  })

  destinationDiv2.addEventListener('click', (event) => {
    if (slide.classList.contains('destination_slider_left')) {
      slide.classList.remove('destination_slider_left')
      pixelDesktop1.classList.remove('pixel_button_active')
      pixelDesktop2.classList.add('pixel_button_active')
    } else if (slide.classList.contains('destination_slider_right')) {
      slide.classList.remove('destination_slider_right')
      pixelDesktop3.classList.remove('pixel_button_active')
      pixelDesktop2.classList.add('pixel_button_active')
    }
  })

  destinationDiv3.addEventListener('click', (event) => {
    if (slide.classList.contains('destination_slider_right') === false) {
      slide.classList.add('destination_slider_right')
      pixelDesktop2.classList.remove('pixel_button_active')
      pixelDesktop3.classList.add('pixel_button_active')
    }
  })
})
