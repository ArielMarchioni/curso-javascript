
//nombre de funcion suma(parametros)
function sumar(a, b){
	//cuerpo de la funcion 
	var suma = a + b;
	console.log("El resultado de " a + b " es: " + suma);

}

sumar(5,3); //El resultado de 5 + 3 es: 8

//podemos evitar escribir mucho codigo usando la misma funcion
//argumentos son los valores que le ponemos a los parametros
sumar(8,9);
sumar(8,9);
sumar(2,4);
sumar(12,3);

// tambien se pueden usar variables

var x = 5;
var y = 3;

sumar(x,y);

function concatenarTresCadenas(cadena1,cadena2,cadena3){
	console.log(cadena1 + " " + cadena2 + " " + cadena3 + " ");
}
concatenarTresCadenas("Estoy", "aprendiendo", "JavaScript");



