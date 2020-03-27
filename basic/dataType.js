// Tipos de datos en javascript
// Number, String, Boolean, Symbol, Null, Undefined, Object
// Java script es es un lenguaje dinamico 

// NUMBER //
let var1 = 1;
let var2 = 0;
let var3 = -0;

console.log("1 / 0 = " + var1 / var2);
console.log("Raiz cuadrada (-1): " + Math.sqrt(-1));

// // STRING //
let saludo1 = "Hola mundo.'s ";
let saludo = 'Hola mundo "infectado"';
let caracter = 'c';
// // En windows para sacar emojims windows + .
let pizza = '🍕🐱‍💻🐱‍';

console.log(saludo + "quiero una " + pizza);
// //  con bastick
console.log(`${saludo} 
    quiero una 
    ${pizza}`);


// // Null Data Type: representa la ausencia de algun valor
let nulo = 45;
nulo = null;
console.log(nulo);

// // Undefined : propiedad de un objeto de no existe o variable no asignada
let nodefinido;
console.log(nodefinido);

// // Una variable que se asigna y no se declara se crea, no es una buena practica
variableSinDeclarar = 10;
console.log(variableSinDeclarar);

// // Operador typeof para determinar el tipo

// // Numero
let primeraVariable = 1.5e5;

// // String
let segundaVariable = 'Hola';

// // Boolean
let terceraVariable = true;

console.log(primeraVariable + ' es un ' + typeof primeraVariable);
console.log(segundaVariable + ' es un ' + typeof segundaVariable);
console.log(terceraVariable + ' es un ' + typeof terceraVariable);
console.log( typeof '🍕');

// //Ejercicio 1

// // Conversiones o Coercion
// // coersion automatica
// // si se añade un numero a un string el numero es convertido a string
// // si se añade un boleano a un string el booleano es convertido a stirng
// // si se añade un numero a un boleano el boleano es converido a numbero

let someNumber = 10;
let someString = "Ten";
let someBoolean = true;

let sumaNumeroyString = someNumber + someString;
let sumaBoolenayString = someBoolean + someString;
let sumaNumeroyBoolean = someNumber + someBoolean;

console.log("Suma de numero y string: " + sumaNumeroyString + typeof sumaNumeroyString);
console.log("Suma de Boolean y String: " + sumaBoolenayString + typeof sumaBoolenayString);
console.log("Suma de numero y boolean:  " + sumaNumeroyBoolean + typeof sumaNumeroyString);

// // Parseo de numeros

let cadenaNumero = '34';
console.log(parseInt(cadenaNumero) + 1);

let cadenaFloat = '34.7';
console.log(parseInt(cadenaFloat));

let numeroaCadena = 45.4;
console.log(numeroaCadena.toString());

// // declaración de objetos

let actor = {
    name : 'Julia Roberts',
    age : 46
};

// // imprimir el objeto
console.log("El 'objeto' actor:", actor );

// // acceso a los propiedades usando la noticion de corchetes []
console.log("La propiedad 'name:'", actor['name']);
console.log("La propiedad 'age:'", actor['age']);

// // acceso a las propiedades usando la notación punto .
console.log("La propiedad 'name'", actor.name);
console.log("La propiedad 'age'", actor.age);