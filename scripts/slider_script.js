/* Common const*/
const destinationPictures = document.querySelector(".destination_pictures");
const destinationSliderDiv = document.querySelectorAll(
  ".destination_slider_div"
);

/* Mobile const*/

const destinationDiv1 = document.querySelector(".destination_div1");
const destinationDiv2 = document.querySelector(".destination_div2");
const destinationDiv3 = document.querySelector(".destination_div3");
const previousSlideButton = document.querySelector(".previous_slide_button");
const nextSlideButton = document.querySelector(".next_slide_button");

/* Desktop const*/

/* Mobile slider */

previousSlideButton.addEventListener("click", (event) => {
  if (destinationDiv2.classList.contains("slider_active")) {
    destinationDiv2.classList.remove("opacity_full");
    destinationDiv2.classList.remove("slider_active");
    destinationDiv1.classList.add("slider_active");
    destinationDiv1.classList.add("opacity_full");
  } else if (destinationDiv3.classList.contains(".slider_active")) {
    destinationDiv3.classList.remove("slider_active");
    destinationDiv2.classList.add("slider_active");
  }
});

nextSlideButton.addEventListener("click", (event) => {
  if (destinationDiv2.classList.contains("slider_active")) {
    destinationDiv2.classList.remove("slider_active");
    destinationDiv3.classList.add("slider_active");
  } else if (destinationDiv1.classList.contains("slider_active")) {
    destinationDiv1.classList.remove("slider_active");
    destinationDiv2.classList.add("slider_active");
  }
});
