var a;
var b;

[a, b, ...args] = [1, 2, 3, 4, 5, 6, 7];

console.log(a);

console.log(b);

console.log(args);


//removememos 3 arreglos

const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];

function removerTresPrimerosArreglos(areglo) {
	const[, , , ...nuevoArreglo] = areglo;
	return nuevoArreglo;
}

const arregloFinal = removerTresPrimerosArreglos(arregloInicial);
console.log(arregloFinal);// [4, 5, 6, 7, 8]