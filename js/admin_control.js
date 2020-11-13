let imageGallery = [{
  image: "images/bg.jpg",
  id: 1,
  name: "photo 1",
  category: "watercolor"
}, {
  image: "images/p7.jpg",
  id: 2,
  name: "photo 2",
  category: "watercolor"
}, {
  image: "images/p8.jpg",
  id: 3,
  name: "photo 3",
  category: "watercolor"
}]


function saveLocalStorage() {
  localStorage.setItem("photos", JSON.stringify(imageGallery));
}

function getLocalStorage() {
  let getPhotoInfo = localStorage.getItem("photos");
  if (!getPhotoInfo) {
    return
  }
  imageGallery = JSON.parse(getPhotoInfo);
}



//localStorage.setItem("gallery-photos", JSON.stringify(imageGallery));
// list items for phots
let itemLine = document.querySelector('.item-line');
let item = "";

function addNewItem(photo, id, name, category) {
  return `
  <tr data-index="${id}">
    <td>
      <img src="${photo}" width="100" height="100" />
    </td>
    <td>${id}</td>
    <td>${name}</td>
    <td>${category}</td>
    <td><a href="#" class="edit-btn" >Edit</a></td>
    <td>
      <a href="#" class="delete" data-delete="${id}"><i data-delete="${id}" class="fa fa-trash delete-btn"></i></a>
    </td>
  </tr>`;
}

function addItem(photo, id, name, category) {
  itemLine.innerHTML += addNewItem(photo, id, name, category);
  deleteItems();
  saveLocalStorage();
}



function galleryInit() {
  getLocalStorage();
  for (let i = 0; i < imageGallery.length; i++) {
    item += addNewItem(imageGallery[i].image, imageGallery[i].id, imageGallery[i].name, imageGallery[i].category);
  }
  itemLine.innerHTML = item;
}


//delete item
function deleteItems() {
  var deleteItems = document.querySelectorAll(".delete-btn");
  deleteItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      let id = e.target.dataset.delete;
      document.querySelector(".bg-modal-delete").style.display = "flex";
      document
        .querySelector(".del-btn")
        .addEventListener("click", function () {
          imageGallery.splice(id, 1);
          let deleteItems = document.querySelector(`tr[data-index="${id}"]`);
          deleteItems.remove();
          document.querySelector(".bg-modal-delete").style.display = "none";
          saveLocalStorage();
        });
    });
  });

}



// Create product modal pop up
document.querySelector(".add-photo-btn").addEventListener("click", function () {
  let submitBtn = document.querySelector(".add-photo-modal-content form");
  submitBtn.addEventListener("submit", function (e) {
    e.preventDefault();
    let image = `images/${e.target.image.value.split(/(\\|\/)/g).pop()}`;
    let newItem = {
      image: image,
      id: e.target.id.value,
      name: e.target.photoname.value,
      category: e.target.category.value
    }
    imageGallery.push(newItem);

    addItem(image, e.target.id.value, e.target.photoname.value, e.target.category.value);
  })
  document.querySelector(".bg-modal").style.display = "flex";
});
document
  .querySelector(".close-addphoto-btn")
  .addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "none";
  });

galleryInit();
deleteItems();