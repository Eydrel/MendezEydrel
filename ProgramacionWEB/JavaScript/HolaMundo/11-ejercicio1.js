'use strict'

/*
Programa que pida dos numeros y que diga cual es el mayor el menor y si son iguales
*/

var numero1 = parseInt (prompt ('Introduce el primer numero',0));
var numero2 = parseInt (prompt (" Introduce el segundo numero",0));

console.log (numero1, numero2);

if (numero1 == numero2){
	alert (" LOS NUMEROS SON IGUALES!");

}else if (numero1>numero2){
	alert ("EL numero1 mayor es: "+ numero1);
	alert ("El numero menor es :"+numero2);
}else if (numero1<numero2){
	alert (" el numero mayor es :"+numero2);
	alert ("el numero menor es : "+ numero1);
}

