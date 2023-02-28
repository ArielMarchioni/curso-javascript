function interpretarIMC(indiceDeMasaCorporal) {
	if(indiceDeMasaCorporal < 18.5){
		console.log("bajo peso");
	} else if (indiceDeMasaCorporal <= 24.9){
		console.log("Normal");
	}else if (indiceDeMasaCorporal <= 29.9){
		console.log("sobre peso");
	}else{
		console.log("obeso");
	}
}
interpretarIMC(28.5);