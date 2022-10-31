let container = document.querySelector(".modal-container");
let favHotelBtn = document.querySelector(".favorites-hotel-button");
let modalCloseBtn = document.querySelector(".modal-close-btn");

favHotelBtn.onclick = function () {
  container.classList.contains("modal-container-hidden")
  container.classList.remove("modal-container-hidden")
  }

modalCloseBtn.onclick = function () {
  container.classList.add("modal-container-hidden")
}
