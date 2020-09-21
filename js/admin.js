// Create product modal pop up
document.querySelector(".add-photo-btn").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});
document
  .querySelector(".close-addphoto-btn")
  .addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "none";
  });

// edit product modal pop up
var editItems = document.querySelectorAll(".edit-btn");
editItems.forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector(".bg-modal-edit").style.display = "flex";
    document
      .querySelector(".close-editphoto-btn")
      .addEventListener("click", function () {
        document.querySelector(".bg-modal-edit").style.display = "none";
      });
  });
});

//delete photo in dashboard pop up window

var deleteItems = document.querySelectorAll(".delete-btn");
deleteItems.forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector(".bg-modal-delete").style.display = "flex";
    document
      .querySelector(".close-del-photo-btn")
      .addEventListener("click", function () {
        document.querySelector(".bg-modal-delete").style.display = "none";
      });
  });
});

// search drop down
// var defaultOption = document.querySelector(".default_option");
// defaultOption.addEventListener("click", function () {
//     var ulActive = document.querySelector(".dropdown ul");
//     ulActive.classList.add("active");
// });

// var dropdownContent = document.querySelector(".dropdown ul li");
// dropdownContent.addEventListener("click", function () {

//     var temp = this.textContent;
//     defaultOption.textContent = temp;
//     console.log(defaultOption.textContent);
//     document.querySelector(".dropdown ul").classList.remove("active");
// });

// search drop down jquery method
$(".default_option").click(function () {
  $(".dropdown ul").addClass("active");
});

$(".dropdown ul li").click(function () {
  var text = $(this).text();
  $(".default_option").text(text);
  $(".dropdown ul").removeClass("active");
});
