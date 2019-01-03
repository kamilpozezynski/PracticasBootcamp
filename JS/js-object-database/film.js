var film = [
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
var i = 0;
for ( i ; i<film.length ; i++ )
	{
		if (film[i].visto) {
			document.write('Has visto ' + film[i].titulo + ' nota de valoracion: ' + film[i].valoracion + "<br/>");
		}
		else{
			document.write('No has visto ' + film[i].titulo + ' nota de valoracion: ' + film[i].valoracion + "<br/>" );

		}
	}