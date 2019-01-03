var numCircles = 6;
var colors = generateRandomColors(numCircles);
var circulos = document.querySelectorAll(".circulo");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#mensaje");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetear");
var facilBtn = document.querySelector("#facilBtn");
var dificilBtn = document.querySelector("#dificilBtn");

facilBtn.addEventListener("click",function(){
	dificilBtn.classList.remove("selected");
	facilBtn.classList.add("selected");
	numCircles = 3;
	//Cuando clicamos en dificil queremos generar numCircles colores nuevos
	colors = generateRandomColors(numCircles);
	//coger un color de esos 3
	pickedColor = pickColor();
	//cambiar el h1
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < circulos.length; i++){
		if (colors[i]){
			circulos[i].style.backgroundColor = colors[i];
		} else{
			//para ocultar los circulos le damos display none;
			circulos[i].style.display = "none";
		}
	}
	//
})
dificilBtn.addEventListener("click",function(){
	facilBtn.classList.remove("selected");
	dificilBtn.classList.add("selected");
	numCircles = 6;
	//when we click on easy we want to generate numCircles new colors
	colors = generateRandomColors(numCircles);
	//coger un color de esos 6
		pickedColor = pickColor();
	//cambiar el h1
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < circulos.length; i++){
			circulos[i].style.backgroundColor = colors[i];
			//queremos que el display de los circulos sea en bloque;
			circulos[i].style.display = "block";
	}
})

resetButton.addEventListener("click", function() {
	//Generamos nuevos colores
	colors = generateRandomColors(numCircles);
	//Pillamos un color al azar del array
	pickedColor = pickColor();
	//Cambiar el color del h1 al Displaycolor
	colorDisplay.textContent = pickedColor;
	//cambiamos el color de los circulos
	for(var i = 0; i < circulos.length; i++) {
		circulos[i].style.background = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});
colorDisplay.textContent = pickedColor;

for(var i = 0; i < circulos.length; i++){
	// Añadimos colores inciales a los circulos
	circulos[i].style.backgroundColor = colors[i];
	//Añadimos click listeners a los circulos
	circulos[i].addEventListener("click", function() {
	//Cogemos el color del cuadrado pinchado
	var clickedColor = this.style.backgroundColor;
	//Lo comparamos con el color escogido anteriormente y si son iguales queremos que salga un
	//"diciendo correcto!"
	if(clickedColor === pickedColor) {
		messageDisplay.textContent = "Correcto!";
		resetButton.textContent = "Jugar de nuevo";

		changeColors(clickedColor);
		h1.style.background = clickedColor;
	} else {
		// y si no es igual el color escogido al circulo pinchado que diga un mensaje 
		//"vuelva a intentarlo"
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Vuelva a intentarlo";
	}
 	});
}


function changeColors(color) {
	//Hacemos un bucle a traves de todos los circulos
	for(var i = 0; i < circulos.length; i++) {
		//Cambiar el color al color asignado
		circulos[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//Creamos un array
	var arr = [];
	//pusheamos colores al azar al array
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	//Devolver el array
	return arr;
}

function randomColor() {
	//Coger un "rojo" de 0 - 255
	var r = Math.floor(Math.random() * 256);
	//Coger un "verde" de 0 - 255
	var g = Math.floor(Math.random() * 256);
	//Coger un "azul" de 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

