var films = [
	{
		titulo: "In Buges",
		valoracion : 5,
		visto : true
	},
	{
		titulo: "frozen",
		valoracion:  4.5,
		visto : false
	},
	{
		titulo: "Mad max fury road",
		valoracion: 5,
		visto: true
	},
	{
		titulo: "Les micherables",
		valoracion: 3.5,
		visto: false
	}
]
films.forEach(function(film){
	var result = "Tu ";
	if(film.visto){
		result += "has visto ";
	} else {
		result += "no has visto ";
	}
	result += film.titulo;
	result += " de valoracion " + film.valoracion + "<br/>";
	document.write(result);
})