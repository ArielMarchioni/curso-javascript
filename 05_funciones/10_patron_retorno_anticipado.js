function miFuncion() {
	console.log("Hola");
	return "mundo";
	console.log("adios");//no se ejecuta por el return
}

console.log(miFuncion());



function calcularRaizCuadrada(num) {
	if (num < 0){
		return undefined;
	}
	return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(25));
console.log(calcularRaizCuadrada(-5));
