//rest son "..." y el nombre de valriable que le ponemos args por argumentos
// para agregar al array

funcion miFuncion(...args){
	console.log(args.length);
}

miFuncion(1,2);

const sumar = (x, y, z) => {
	const args = [x, y, z];
	return args.reduce((a, b) => a + b, 0);//funcion flecha como argumeto
	// .reduce() suma los elementos del arreglo y retorna el resultado
}
//modificamos la funcion para que se puedan poner cualquier parametro
const sumar = (...args) => {
	
	return args.reduce((a, b) => a + b, 0);//funcion flecha como argumeto
	// .reduce() suma los elementos del arreglo y retorna el resultado
}