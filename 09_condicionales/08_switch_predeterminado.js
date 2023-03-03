//agregar opcion predeterminada default

function seleccionarIdioma(valor) {
	var idioma;
	switch (valor) {
		case 1:
			idioma = "Español";
			break;
		case 2:
			idioma = "Frances";
			break;	
		case 3:
			idioma = "Italiano";
			break;
		default:
			idioma = "Ingles";
			break;				
	}
	return idioma;	
}

console.log(seleccionarIdioma(1));// Español
console.log(seleccionarIdioma(2));// Frances
console.log(seleccionarIdioma(3));// italiano
console.log(seleccionarIdioma(5));// Ingles