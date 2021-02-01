'use strict'

//operadores

var numero1 = 7;
var numero2  = 12;
var operacion = numero1*numero2;

alert ("Es resultado de la operacion es :"+ operacion);

//tipos de datos
var numero_entero = 44; //int
// String
var cadena_texto = "hola 'que' tal"; 
//boleean es para condiciones etc.
var verdadero_o_falso = true;
console.log (cadena_texto);
 //sirve para convertir un int a string pero no es posible usarlo para hacer una operacion. 
var numero_falso = "33";
//para convertirlo a numero de string a entero usar:"Number(variable)+variable"
//para convertirlo a numero entero usar:"ParseInt(variable)+variable"
//para convertirlo a numero flotante usar:"ParseFloat(variable)+variable"
//para convertir un numero a un String usar : "String (variable)+variable"
console.log (Number (numero_falso)+numero_entero); 