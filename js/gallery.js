//Gallery project all functions

// gallery-thumbnail page
var gallery = document.querySelector("#gallery");

//  get value grid-column-gap: 8px; grid-auto-rows: 18px;
var getVal = function (elem, style) {
  return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
};

// get image real height
var getHeight = function (item) {
  return item.querySelector(".content").getBoundingClientRect().height;
};
// console error
gallery.querySelectorAll("img").forEach(function (item) {
  item.classList.add("byebye");
  // when page load finish run this
  item.addEventListener("load", function () {
    var altura = getVal(gallery, "grid-auto-rows");
    var gap = getVal(gallery, "grid-row-gap");
    var gitem = item.parentElement.parentElement;
    gitem.style.gridRowEnd =
      "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
    item.classList.remove("byebye");
  });
});

gallery.querySelectorAll(".gallery-item").forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.toggle("full");
  });
});

