var s = 1;
var slen = 90;

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("loaded");
  setInterval(next, 3000);
  document.getElementById("clickarea").addEventListener("click", next);
});

function next() {
  if ( s == slen ) { s = 1};
  s = s + 1;
  var slide = document.getElementById("slide");
  var src = "img/HM-Portfolio-" + s + ".jpg";
  slide.src = src;
}

function prev() {
  if ( s == 1 ) { s = slen + 1 };
  s = s - 1
  var slide = document.getElementById("slide");
  var src = "img/HM-Portfolio-" + s + ".jpg";
  slide.src = src;
}
