//acceder a elementos arrays anidanos 0 multidimemcionales

var miArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/*
           Array:     [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
         Indices:          0          1           2 los arrays principales.
indices internos:       0  1  2    0  1  2    0  1  2
*/

console.log(miArray[0]); //[1, 2, 3]
console.log(miArray[1]); //[4, 5, 6]
console.log(miArray[2]); //[7, 8, 9]

/*usar segundo indice para acceder a los arrays anidados
variable[primierArray][segundoArray]*/

console.log(miArray[1][0]);// 4
console.log(miArray[1][1]);// 5
console.log(miArray[1][2]);// 6

console.log(miArray[2][0]);// 7