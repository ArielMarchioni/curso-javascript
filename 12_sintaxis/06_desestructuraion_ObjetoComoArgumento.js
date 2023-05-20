var nuevoPerfilCliente = {
	nombre: "Jane done",
	edad: 24,
	nacionalidad: "Argentino",
	ubicacion: "Londres"
};
//funcion sin descomponer
const actualizarPerfil = (informacionDePerfil) => {
	const{nombre, edad, nacionalidad, ubicacion} = informacionDePerfil;
	console.log(nombre);
	console.log(edad);

	console.log(nacionalidad);
	console.log(ubicacion);


}

actualizarPerfil(nuevoPerfilCliente);

// descomponer el objeto en la lisa de parametros

const actualizarPerfil = ({nombre, edad, nacionalidad,ubicacion}) => {
	console.log(nombre);
	console.log(edad);
}

const estadisticas = {
	max: 58.78,
	desviacionEstandar: 4.34,
	mediana: 34.54,
	moda: 23.87,
	min: -0.75,
	promedio: 35.84
};

const mitad = ({max, min}) => (max + min) / 2.0;
console.log(mitad(estadisticas));