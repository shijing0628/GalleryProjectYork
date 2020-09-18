// home page slider
let temp = 0;
var sliders = document.getElementsByClassName("mySlides");

var slidersDisplay = function (n) {
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }

  for (let i = 0; i < sliders.length; i++) {
    // if (sliders[i].classList.contains("active")) {
    //   sliders[i].classList.remove("active");
    // }
  }
  console.log(n, sliders.length);
  if (n > sliders.length - 1) {
    n = 0;
  }
  if (n < 0) {
    n = sliders.length - 1;
  }
  temp = n;

  sliders[n].style.display = "block";
};

slidersDisplay(temp);

var plusSlides = function () {
  slidersDisplay(temp + 1);
};

var previousSlides = function () {
  slidersDisplay(temp - 1);
};

// var currentSlide = function (e, n) {
//   slidersDisplay(n);
// };

//sticky header for home page
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  