function clasificarValor(valor) {
	if (valor < 5){
		console.log("Menor que 5.");
	} else if (valor < 10){
		console.log("Menor que 10");
	}else {
		console.log ("Mayor o igual que 10.");
	}
}

clasificarValor(2);// menor que 5
clasificarValor(7);// Menor que 10
clasificarValor(15);//mayor o igual que 10.