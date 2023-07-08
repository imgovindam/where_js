let openBtn = document.getElementById("open-btn");
let model = document.getElementById("modal-conatiner");
let closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", function () {
  // console.log("Button clicked!");
  model.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  model.style.display = "none";
});
window.addEventListener("click", function (e) {
  if (e.target === model) {
    model.style.display = "none";
  }
});
