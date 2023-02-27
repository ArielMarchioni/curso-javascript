//else if 
function clasificarValor(valor) {
	if ( valor % 2 == 0){
		console.log("Divisible entre 2.");
	} else if(valor % 3 == 0) {
		console.log("Divisible entre 3");
	}else{
		console.log("no es divisible entre las opciones");
	}
}

clasificarValor(2);