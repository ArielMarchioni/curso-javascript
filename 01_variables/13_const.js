//Constante es para accedes a valores no se puede modificar y queremos que no cambien .

const miConstante = 35;

console.log(moConstante);

miConstante = 14;// error read only 

//por convencion se usan las const con mayusculas y separadas por _
// MI_CONSTANTE

function calcularAreaCirculo(radio) {
	const PI = 3,14;

	if (radio < 0 ){
		return undefined;
	}
	return PI * (radio ** 2);
}

console.log(calcularAreaCirculo(5));// 78,5
