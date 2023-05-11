02_abito_VarVsLet.js


//var la varible  se puede usar fuera del ciclo
for(var i = 0 ; i <3; i++){
	console.log(i);
}

console.log("Varible: " + i);
//En let esta limitado al bloque donde se define
//en let solo se usa dentro del ciclo 
//
for(let i = 0 ; i <3; i++){
	console.log(i);
}

console.log("Varible: " + i);//error

//

var mostrarColor = true;

if (mostrarColor){
	let color = "verde";
	console.log("Mi color favorito es: "  + color);

}

console.log(color);//no se ejecuta afuera.
