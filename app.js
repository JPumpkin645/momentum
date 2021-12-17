const body = document.body;

function WindowHanddleResize() {
  var wWidth = window.innerWidth;
  if (wWidth <= 400) {
    body.className = "";
  } else if (wWidth > 400 && wWidth <= 700) {
    body.className = "middle";
  } else if (wWidth > 700) {
    body.className = "large";
  }
}
window.addEventListener("resize", WindowHanddleResize);
//400//700//이상
