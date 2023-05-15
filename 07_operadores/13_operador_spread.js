//toma un arreglo y lo descompone en individuales

const numeros = [1, 2, 3];

funcion sumar(x, y, z){
	return x + y + z;
}
//s
//sumar(numeros[0], numeros[1], numeros[2]);

// 
console.log(sumar(...numeros));