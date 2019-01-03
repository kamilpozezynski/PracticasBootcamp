class Heroe {
	constructor(nombre,experiencia,vida,arma){
		this.nombre = nombre;
		this.experiencia = experiencia;
		this.vida = vida;
		this.arma = arma;
	}
		get_nombre(){
 			console.log( "Mi nombre es:" + " " + this.nombre);
 		}
 		get_experiencia(){
 			console.log("Experiencia:" + " " + this.experiencia);
 		}
 		get_vida(){
 			console.log("HP:" + " " + this.vida);
 		}
 		get_arma(){
 			console.log("Arma:" + " " + this.arma);
 		}
 		get_puntos(){
 			this.vida
 		}
 		
 	    atacar (target) {
 	  		console.log(this.nombre + " ha atacado a:" + target.nombre);
 	  		target.vida - 15;
 	  		console.log("la vida actual es:" + target.vida);
 	}
}
 	
class guerrero extends Heroe{
		constructor(nombre,experiencia,vida,escudo){
				super(nombre,experiencia,vida,arma);
				this.escudo = escudo;
	
 			}
 			get_escudo(){
 			console.log("Escudo:" + " " + this.escudo);
		}
	}
class arquero extends Heroe{
		constructor(nombre,experiencia,vida,arma,flechas){
				super(nombre,experiencia,vida,arma);
				this.flechas = flechas;

 			}
 			 	get_flechas(){
			console.log("Numero de unidades:" + " " + this.flechas);
 		}
	}
class mago extends Heroe{
		constructor(nombre,experiencia,vida,hechizo){
				super(nombre,experiencia,vida,arma);
				this.hechizo = hechizo;

 			}
 				  hechizo(){
				console.log("Nivel del hechizo: " + this.hechizo)
 		}
	}		
class druida extends Heroe{
		constructor(nombre,experiencia,vida,arma,cura){
			super(nombre,experiencia,vida,arma);
			this.cura = cura;

 			}
 			cura(target){
			console.log("Hp curados a:" + target + this.cura);
 		}
 	}


