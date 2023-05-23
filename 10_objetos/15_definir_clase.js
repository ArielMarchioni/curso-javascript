//
class TransbordadorEspacial{
	constructor(planeta){
		this.planeta = planeta;
	}
}

var zeus = new TransbordadorEspacial("Jupiter");
console.log();

console.log(zeus.planeta);

var apolo = new TransbordadorEspacial("Marte");
console.log(apolo.planeta);

class Mascota{
	constructor(nombre, edad){
		this.nombre = nombre;
		this.edad = edad;
	}
}

var miMascota = new Mascota("Nora", 2),
var tuMascota = new Mascota("gino", 2);