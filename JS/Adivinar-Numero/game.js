//create secretNumber
var secretNumber = 4;

//Preguntar para que intente adivinar
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//Decir que has acertado
if(guess === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}
//Decir que el numero adivinado es mas alto
else if(guess > secretNumber){
	alert("Too high.  Guess again!");
}
// demasiado bajo
else {
	alert("Too low.  Guess again!");
}