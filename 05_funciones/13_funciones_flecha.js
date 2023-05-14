// son un tipo de funcion mas compacto , se usa cuando se definen funciones anonimas (sin nombres)

const fecha = funcion(){
	return new Date();
};

//transformamos en una funcion flecha 

const fecha = () => new Date();
//son utiles para pasar funiones flecha como argumentos a otras funciones.