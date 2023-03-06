function clasificarVolumen(valor) {
	var volumen;
	switch(valor){
		case 1:
			volumen = "Bajo";
			break;
		case 2:
		case 3:
			volumen = "Intermedio";
			break;
		case 4:
		case 5:
		case 6:
			volumen = "alto";
			break;		
	}	
	return volumen;
}

console.log(clasificarVolumen(1));
console.log(clasificarVolumen(2));
console.log(clasificarVolumen(3));
console.log(clasificarVolumen(5));
console.log(clasificarVolumen(4));
