//asignamos el valor retornado a una variable

function sumar(a , b) {
	return a + b;
}

//en la varible resultado se guarda la 8, que es la suma de 5 + 3
var resultado = sumar(5, 3);

console.log(resultado); //8

function crearCadenaMeta(lenguajeDeProgramacion) {
	return "Mi meta es aprender " + lenguajeDeProgramacion;
}

var miMeta = crearCadenaMeta("JavaScript");

console.log(miMeta);// Mi meta es aprender Javascript