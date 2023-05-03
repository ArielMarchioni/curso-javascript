//hacemos numeros random entre n y n 

function RangoAleatorio(limiteInferior, limiteSuperior) {
	return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1))+limiteInferior;

}

console.log(generarAleatorio(3,8));

for (var i = 0; i < 10; i++) {
	console.log(generarAleatorio(3, 8));
}