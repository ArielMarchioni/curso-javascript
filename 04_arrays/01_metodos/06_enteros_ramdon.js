//creamos un numero aleatorio en tre 0 y19

var numeroAleatorio= Math.floor(Math.random()*20);// floor retorna el mayor numero entero entre los argumentos(o sea lo redonda para que no sea decimal)
console.log(numeroAleatorio);

function generarAleatorio(limiteSuperior) {
	//generar un entero aleatoria entre 0 y el limite
	//superior (sin incluirlo)
	return Math.floor(Math.random()* limiteSuperior);
}
console.log(generarAleatorio(5));
//podemos hacer un ciclo para que ejecute muchas veces el codigo

for (var i = 0; i < 15; i++) {
	console.log(generarAleatorio(5));
}



