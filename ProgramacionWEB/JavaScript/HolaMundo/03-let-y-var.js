'use strict'
//pruebas con let y var
//tambien use Strict
//prueba con var
var numero = 40;
console.log (numero);//valor 40

if (true) {
	var numero = 50;
	console.log (numero);//valor 50
}
console.log (numero);//valor 50
//prueba con let
var texto ="PAGINA WEB DE EYDREL";
console.log (texto); //valor PAGINA WEB DE EYDREL
if (true) {
	let texto ="PAGINA";
	console.log (texto); //valor PAGINA
}
console.log (texto);//valor PAGINA WEB DE EYDREL