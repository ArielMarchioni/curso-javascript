/*
Proximo en la fila:

cola o queue es una estructura de datos abstracta , los elementos se mantienen
en orden. los nuevos elementos se pueden añadir al final de la cola y
los elementos previos se retiran del principio de la cola


define una funcion proximoEnLaFila que tome un arreglo (arreglo) y un numero (elemento) como argumentos
agrega el numero al final del arreglo y elimina el primer elemento del arreglo.
la funcion proximoEnLaFila debe retornar el elemento que fue removido.

*/
function proximoEnLaFila(arreglo, elemento) {
	arreglo.push(elemento);//agrega al final del array el elemento
	return arreglo.shift();//remueve el primer elemento y lo retorna
	
}

var miArray = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(miArray));// JSON.stringify convierte el array en una cadena de caracteres
console.log(proximoEnLaFila(miArray,6));
console.log ("Despues: " + JSON.stringify(miArray));
/*
retorna

 Antes: [1,2,3,4,5]
1
 Despues: [2,3,4,5,6]
*/