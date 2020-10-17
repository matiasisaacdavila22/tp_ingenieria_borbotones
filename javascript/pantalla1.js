
/*
TIPOS DE VARIABLES EN JS:
*VAR
*LET
*CONST
A continuacion hacemos un input desde el explorador:
var  numero = parseInt(prompt("ingrese un numero ", 0)) ; 
*/

//para ver por consola
for ( var i = 1 ; i <= 10 ; i++ ){
    console.log(i);
}

// JSON
var persona= {
    nombre: "yair",
    apellido: "ruiz",
    edad: 24
}

function mostrarPersona(persona){
    console.log(persona);
}


mostrarPersona(persona);

//agregamos nuevas propiedas a nuestro json de persona
persona.direccion = "calle 123";

console.log(persona);

persona.saludar = function() {
    console.log("hola");
}

persona.saludar();



var mifuncion = function( persona) {
    console.log(persona.nombre);
}

//funcion que recibe otras funciones y muestra los resultados de las mismas
function mostrarEnConsola( numero1, numero2, funcion1, funcion2){

    console.log( "resultado de la suma "+funcion1(numero1,numero2));
    console.log("resultado de la multiplicacion " + funcion2(numero1, numero2));
}

mostrarEnConsola( 1 , 2 , function(valor1, valor2) {
    return valor1 + valor2;
}, function(valor1, valor2) {
    return valor1 * valor2;
})