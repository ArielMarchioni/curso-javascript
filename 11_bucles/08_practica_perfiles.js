var contactos = [
  {
    "nombre": "Nora",
    "apellido": "Nav",
    "numero": "0543236543",
    "gustos": ["Pizza", "Programación"]
  },
  {
    "nombre": "Harry",
    "apellido": "Potter",
    "numero": "0994372684",
    "gustos": ["Hogwarts", "Magia"]
  },
  {
    "nombre": "Sherlock",
    "apellido": "Holmes",
    "numero": "0487345643",
    "gustos": ["Casos interesantes", "Violín"]
  }
];

function buscarPerfil(nombre,propiedad) {
	for( var i = 0; i < contactos.length; i++){
		if(contactos[i].nombre === nombre){
			return contactos[i][propiedad] || "La propiedad no existe."
		}
	}
	return "el contacto no esta en la lista "
}

console.log(buscarPerfil("Harry", "apellido"));

console.log(buscarPerfil("Nora","direccion"));