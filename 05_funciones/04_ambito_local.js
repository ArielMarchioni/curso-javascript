/*
no se puede usar la varible fuera de la funcion 
por eso se llama local
*/

function miFuncion() {
	var miVariableLocal = 4 ;
	console.log(miVariableLocal);
}

miFuncion();
console.log(miVariableLocal);// ReferenceError: miVariableLocal is not defined