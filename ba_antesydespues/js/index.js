/*JS from http://thenewcode.com/819/A-Before-And-After-Image-Comparison-Slide-Control-in-HTML5*/
changed = document.getElementById("changed");
slider = document.getElementById("slider");

function moveDivisor() {
  changed.style.width = slider.value+"%";
}

window.onload = function() {
	moveDivisor();
};