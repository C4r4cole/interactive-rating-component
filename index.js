const btn = document.getElementById("btn");
const thankU = document.getElementById("thankUstate");
const rate = document.getElementById("ratingState");

const score1 = document.querySelector(".score1");
const yourScore = document.getElementById("yourScore");

btn.addEventListener(
  "click",
  () => {
    rate.hidden = true;
    thankU.hidden = false;
  },
  false
);
