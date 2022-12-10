var lenguajeDeProgramacion = "JavaScript"

/*
cadena  J a v a S c r i p t
indice	0 1 2 3 4 5 6 7 8 9
*/

//para obtener el primer caracter
console.log(lenguajeDeProgramacion[0]);//devuelve J
console.log(lenguajeDeProgramacion[1]);//devuelve a
console.log(lenguajeDeProgramacion[2]);//devuelve v
console.log(lenguajeDeProgramacion[3]);//devuelve a
console.log(lenguajeDeProgramacion[4]);//devuelve S
console.log(lenguajeDeProgramacion[5]);//devuelve c
console.log(lenguajeDeProgramacion[6]);//devuelve r
console.log(lenguajeDeProgramacion[7]);//devuelve i
console.log(lenguajeDeProgramacion[8]);//devuelve p
console.log(lenguajeDeProgramacion[9]);//devuelve t


//si usamos un indice que no esta en la cadena
console.log(lenguajeDeProgramacion[12]);//devuelve Undefined

//Ver ultimo indice

/* 
El ultimo indice siempre es 
longitud - 1 porque comenzamos a contar desde 0

lenguajeDeProgramacion.length parar "JavaScript" es 10
pero el ultimo indice es 9

*/

console.log(lenguajeDeProgramacion[lenguajeDeProgramacion.length -1]); //devuelve t

// si queremmos el penultimo le restamos -2

console.log(lenguajeDeProgramacion[lenguajeDeProgramacion.length -2]);

//Podemos declarar una variable con el valor que queramos acceder

var n = 4
console.log(lenguajeDeProgramacion[lenguajeDeProgramacion.length -n]); //devuelve p





