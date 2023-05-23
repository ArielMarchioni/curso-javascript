const persona = {
	nombre: "Isabel",
	presentarse: function () {
		return `Hola! mi nombre es ${this.nombre}`;
	}
}
//si el valor de una propiedad es una funcion, se denomina "metodo "
persona.presentarse();

//forma nueva

const persona = {
	nombre: "Isabel",
	presentarse() {
		return `Hola! mi nombre es ${this.nombre}`;
	}
}