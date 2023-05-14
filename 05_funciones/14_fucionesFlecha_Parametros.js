//definir fun flecha que tomen mas parametros
//funcion normal 
const sumarTres = funcion(x){
	return x + 3;
};

//funcion flecha 

const sumarTres = (x) => x + 3;

console.log(sumarTres(4));//7
//

const concatenar = funcion(arr1, arr2){
	return arr1.concat(arr2);
}

console.log(concatenar([1,2], [3, 4, 5]));

//con funcion flecha 
const concatenar = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenar([1,2], [3, 4, 5]));  

// funciones con mas de una solalinea 

const sumar = funcion(a, b){
	let num = 6;
	return a + b + num;
}

// 

const sumar = (a, b) =>{
	let num = 6;
	return a + b + num;
}

console.log(sumar(1,1 )); //8
