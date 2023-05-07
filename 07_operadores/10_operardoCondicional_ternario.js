//

function retornarMinimo(x, y) {
	if (x < y){
		return x;
	}else{
		return y;
	}
	// body...
}

//compactamos el codigo con el operador condicional ternario



function retornarMinimo(x, y) {
	return x < y ? x : y;
	// ?= si la condicion es verdadeera retorna x :si no Y

}

console.log(retornarMinimo(4, 7));
console.log(retornarMinimo(8, 1));

var a = 5;
var b = 9;

console.log(a > b ? a + 2 : 2 : b * 3);