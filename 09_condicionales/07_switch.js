function clasificarValor(valor) {
	var respuesta;
	switch (valor){
		case 1:
			respuesta = "alpha";
			break;
		case 2:
			respuesta = "beta";
			break;
		case 3:
			respuesta = "gamma";
			break;
		case 4:
			respuesta= "delta";
			break				

	}
	return respuesta;
}

console.log(clasificarValor(1));// alpha
console.log(clasificarValor(2));// beta
console.log(clasificarValor(3));// gamma
console.log(clasificarValor(4));// delta

var producto = "hamburguesa";

switch (producto){
case "pizza":
	console.log("La pizza cuesta 10,55$");
	break;
case "hamburguesa":
	console.log(" La hamburguesa cuesta 6,78$");
	break;
case "helado":
	console.log( " El helado cuesta 2.50$");
	break;				
}