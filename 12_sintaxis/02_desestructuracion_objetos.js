const usuario = {
	johnDoe: {
		edad: 27,
		correo: "correo@correo.com"
	}
};

// const{nombreDelaPropedadACeder: { popiedades a asignar}} = variable
const{johnDoe: {edad, correo}} = usuario;

console.log(edad);
console.log(correo);
//ponerle nombres nuevos
const{johnDoe: {edad: edadDelUsuario, correo:CorreoDelUsuario}} = usuario;