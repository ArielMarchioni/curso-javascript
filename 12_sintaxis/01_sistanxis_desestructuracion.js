const usuario = {
	nombre: "Gino Smith",
	edad: 34
};
//antes
const nombre = usuario.nombre;
const edad = usuario.edad;
//ahora
//nombres de propiedades
const{nombre, edad} = usuario // buscar dentro de variable usuario

//

var cordenadas = {
	x: 4;
	y: 6;
	z: 12;
};
/*
antes
const x = cordenadas.x;
const z = cordenadas.z;
const y = cordenadas.y;
*/

const{x, y, z} = cordenadas;
