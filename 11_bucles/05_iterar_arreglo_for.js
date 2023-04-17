// mientras i sea menor que la longitud del arreglo osea "arreglo.length"

var miArreglo = [4,6,8,2];
var total= 0;

for (var i = 0, i < miArreglo.length; i ++){
	total += miArreglo[i];
}

console.log(total);

//para ver lo que sucede en la consola con las iteraciones

var miArreglo = [4,6,8,2];
var total= 0;

for (var i = 0, i < miArreglo.length; i ++){
	console.log("Iteracion"+ i);
	console.log(miArreglo[i]);
	total += miArreglo[i];
}
// cambiar a mayusculas 

var lenguajes = ["Javascript", "Python", "java","C++"];

for (var i =0; i lenguajes.length; i++){
	console.log(lenguajes[i].toUpperCase());
}


//
function contarNumerosPares(arreglo) {
	var total = 0;
	
	for(var i = 0; i < arreglo.length; i ++){
		if (arreglo[i] % 2 == 0) {
			total++;
		}
	}
	return total;
}
console.log(contarNumerosPares[5,2,5,7,6,8,8,8,1]);
