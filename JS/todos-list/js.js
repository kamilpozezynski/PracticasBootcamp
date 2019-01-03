var cosas = document.querySelectorAll("li");

for (i = 0; i < cosas.length ; i++){
	cosas[i].addEventListener("mouseover", function(){
		this.classList.add("seleccionado")
	});
	cosas[i].addEventListener("mouseout", function(){
		this.classList.remove("seleccionado");
	});
	cosas[i].addEventListener("click", function(){
		this.classList.toggle("hecho");
	});
}