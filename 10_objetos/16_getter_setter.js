// para protejer la data del objeto
/*
obtener el valor en forma indirecta
*/

class Libro{
	constructor(autor){
		this._autor = autor;
	}

	get autor(){
		return this._autor;
	}

	set autor(nuevoAutor){
		this._autor = nuevoAutor;
	}
}

const libro = new Libro("anonimo");
console.log(Libro.autor); 
