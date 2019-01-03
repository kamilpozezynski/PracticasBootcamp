var floresGeneradas = document.getElementById("contador"); 
var	generadorDeFlores = document.querySelector("#btnContador");
var contador = 0;
var stock = document.getElementsByClassName("stock");
var stock1 = document.getElementById("stock1")
contador = 0;
contadorDeStock = 1; 

generadorDeFlores.addEventListener("click",function(){
	contador++;
    floresGeneradas.innerHTML = contador;
    stock[0].innerHTML = contador;
    vendeFlores(contador,stock);
});
function vendeFlores(contadorDeStock,stock){
	setInterval(function(){
		if (stock1.textContent > 0) {
		stock1.innerHTML = stock1.textContent - contadorDeStock; 
		}
		else{
			stock1.innerHTML = 0;
		}
	}, 1000);
}