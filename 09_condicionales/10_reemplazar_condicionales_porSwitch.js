function seleccionarIdioma(valor) {
  var idioma;

  if (valor == 1) {
      idioma = "Español";
  } else if (valor == 2) {
      idioma = "Francés";
  } else if (valor == 3) {
      idioma = "Italiano";
  } else {
      idioma = "Inglés";
  }

  return idioma;


  //se reemplaza por 

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
