function esMenorQue(a , b) {
	if ( a < b){
		return true;
	}else{
		return false;
	}
}

//es mejor con menos lineas
function esMenorQue(a , b) {
	return a < b;
}

console.log(esMenorQue(3,6));//true
console.log(esMenorQue(8,6));//false