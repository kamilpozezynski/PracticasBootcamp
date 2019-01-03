//creamos una funcion
function calc () {
	//creamos las variables y con un document.query selector conseguimos coger los elementos que hay en el html.
	var a = parseInt(document.querySelector("#value1").value);
	// y con un .value al final podemos trackear que hay escrito en ese textfield.
	var b = parseInt(document.querySelector("#value2").value);
	var op = document.querySelector("#operador").value;
	var calculate;
	// creamos varios if statements dependiendo de si el cliente ha seleccionado suma, resta, multiplacion o division.
	if (op == "Suma") {
		calculate = a + b;
	}
	else if (op == "Resta") {
		calculate = a - b;
	}
	else if(op == "Multiplicacion") {
		calculate = a * b;
	}
	else{
		calculate = a / b;
	}
	// al final con un document.query selector cogemos la ID que creamos en la div resultado 
	// le decimos que aplique calculate y nos lo muestre en el html con innerHTML.
	document.querySelector("#resultado").innerHTML = calculate;
}
// final