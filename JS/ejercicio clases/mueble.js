
var mueble = function ('nombre del mueble','altura','anchura','profundidad') {
		this.nombreDelMueble = nombreDelMueble;
		this.altura = altura;
		this.anchura = anchura;
		this.profundidad = profundidad;
}

var armario = new mueble('ikeamueble','200cm','100cm','50cm')
console.log(armario)