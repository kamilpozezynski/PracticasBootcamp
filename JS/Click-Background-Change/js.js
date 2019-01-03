// Seleccionamos el elemento
var boton = document.querySelector("button");
var isPurple = false;
/* 
Esta es la manera mas larga de hacerlo.
// Le añadimos un eventListener
boton.addEventListener("click",function(){
	if (isPurple) {
		document.body.style.background = "white";
		isPurple = false;
	} else{
		document.body.style.background = "purple";
		isPurple = true;
	}
}) 
*/

/*  Esta manera es un poco mas corta
// Le añadimos un eventListener
boton.addEventListener("click",function(){
	if (isPurple) {
		document.body.style.background = "white";
	} else{
		document.body.style.background = "purple";
	}
	isPurple = !isPurple;
}) 
*/


	boton.addEventListener("click",function(){
				document.body.classList.toggle("purple");
	});
