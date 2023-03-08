var mochila = {
	"color" : "azul",
	"tamaño" : "mediano",
	"contenido" : ["botella de agua", "cuaderno"]
};

console.log(mochila.color);// azul

//actualizamos el valor color
mochila.color = "verde";
console.log(mochila.color);//verde

console.log(mochila.contenido);//"botella de agua", "cuaderno"

//agregamos un elemento a la lista
mochila.contenido.push("lapiz");//"botella de agua", "cuaderno", "lapiz"