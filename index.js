const btn = document.getElementById("btn");
const score1 = document.querySelector(".score1");
const yourScore = document.getElementById("yourScore");
const thankU = document.querySelector(".thankUstate");

btn.addEventListener("click", () => {
  thankU.style.visibility = "visible";
});
