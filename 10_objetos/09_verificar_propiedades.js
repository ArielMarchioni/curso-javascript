//verificamos si la propiedad existe 
var miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "precio": 4.56
};


//metodo hasOwnProperty
console.log(miCuaderno.hasOwnProperty("color"));//true

console.log(miCuaderno.hasOwnProperty("origen"));//false


function verificarPropiedades(obj, propiedad) {
	if ( obj.hasOwnProperty(propiedad)){
		return "Propiedad: " + obj[propiedad];
	}else{
		return "el objeto no tiene esa propiedad"
	}
}

console.log(verificarPropiedades(miCuaderno, "color"));//Propiedad: verde

console.log(verificarPropiedades(miCuaderno, "origen"));// Propiedad: verde