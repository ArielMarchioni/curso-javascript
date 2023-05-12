let colores = {
	"verde": "#1111111",
	"azul": "#22222222",
	"negro": "#3333333",
	"blanco": "#4444444"
};

Object.freeze(colores);// lo frizamos no podemos modificar el objeto

colores.amarillo = "#5555555";
console.log