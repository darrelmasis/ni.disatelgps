let submitButton = document.getElementById("submit");
let modal = document.getElementById("modal");
let backdrop = document.getElementById("backdrop");
let close = document.getElementById("close");

submitButton.addEventListener("click", e => {
  e.preventDefault();

  modal.style.transform = "scale(1) translate(-50%, -50%)";
  backdrop.style.display = "block";
});

close.addEventListener("click", e => {
  modal.style.transform = "scale(0) translate(-50%, -50%)";
  backdrop.style.display = "none";
});