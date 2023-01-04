/*
Que pasa si tenemos 2 varibles con el mismo nombre?
la variable que esta dentro de la funcion tiene preferencia
*/

//declaramos variable global
var miNombre = "Ariel"


//declaramos variable local
function mostarMiNombre() {
	var miNombre = "Nerea";
	console.log(miNombre);
}


mostarMiNombre();// Nerea

console.log(miNombre);//Ariel