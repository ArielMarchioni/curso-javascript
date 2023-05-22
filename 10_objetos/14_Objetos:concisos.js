const crearPersona = (nombre , edad , idioma ) => {
	return{
		nombre: nombre,
		edad: edad,
		idioma: idioma,
	};
};

consle.log(crearPersona("Gino Smith", 28, "Español"));

//

const crearPersona = (nombre , edad , idioma ) => ({nombre, edad, idioma});
consle.log(crearPersona("Gino Smith", 28, "Español"));