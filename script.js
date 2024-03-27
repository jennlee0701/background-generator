var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor = document.querySelector("button");
// getElementsByTagName doesn't work

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// 1. Write code so that the colour inputs match the background generated on the first page load.
// 2. Display the initial CSS linear gradient property on page load.

function initialGradient() {
	color1.setAttribute("value", "#FF0000");
	color2.setAttribute("value", "#FFFF00"); 
	css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

initialGradient();

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
function getRandomColor() {
	// v1 returns only black, not random colors
	// color1.value = [Math.floor(Math.random() * 256)], [Math.floor(Math.random() * 256)], [Math.floor(Math.random() * 256)];
	// color2.value = [Math.floor(Math.random() * 256)], [Math.floor(Math.random() * 256)], [Math.floor(Math.random() * 256)];
	color1.value = '#'+Math.random().toString(16).slice(-6);
	color2.value = '#'+Math.random().toString(16).slice(-6);
	setGradient();
}

randomColor.addEventListener("click", getRandomColor);

