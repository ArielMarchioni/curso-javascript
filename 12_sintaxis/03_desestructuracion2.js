const PRONOSTICO_LOCAL = {
	"ayer": {
		maxima: 30,
		minima: 19,
	},
	"hoy":{
		maxima: 32,
		minima 24,
	}
};
/*
const minimaHoy = PRONOSTICO_LOCAL.hoy.minima;
const maximaHoy = PRONOSTICO_LOCAL.hot.maxima;

console.log(minimaHoy, maximaHoy);
*/

const{hoy:{minima: minimaHoy}} = PRONOSTICO_LOCAL;
console.log(minimaHoy);
//ponemos los dos juntos 
const{hoy:{ minima: minimaHoy, maxima: maximahoy}} = PRONOSTICO_LOCAL;
console.log(minimaHoy, maximahoy);