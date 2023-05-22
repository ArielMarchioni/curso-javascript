//plantillas literales de cadena

/*caracteristicas:
-se usa el acento invertido (``) en lugar de comillas.
-pueden contener comillas simples y dobles.
-las lineas se preservan como se escriben en el codigo
-para reemplazar una variable se escribe ${variable}
-dentro de ${} tambien puedes escribir expresiones.*/

var a = 6;
console.log(`El valor de a es ${a}`);

var nombre = "Nora";
var edad = 6;

console.log(`MI nombre es ${nombre} y tengo ${edad} años`);

var miArreglo = [1, 2, 3, 4];
console.log(`El arreglo es ${Json.stringify(miArreglo)}`);


var persona ={
	nombre: "Gino cass"
	edad: 43
},

const SALUDO = ` Hola! Mi nombre es ${persona.nombre} y tengo ${persona.edad} años `;

console.log(SALUDO);