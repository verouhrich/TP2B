// declaración e inicializacion de un Array
let nombres = ['Juan', 'Pedro', 'Maria', 'Eduardo'];

let primerNombre = nombres[0];

let ultimoNombre = nombres[nombres.length - 1];

// iterar en un Array
console.log('Itearar con for');
for (let i = 0; i < nombres.length; i++) {
    const nombre = nombres[i];
    
    console.log(nombre);
}

console.log('Iterar con for of');
for (const nombre of nombres) {    
    if(nombre == 'Pedro'){
        continue;
    }
    console.log(nombre);
}

// agregar elementos al final de un array
nombres.push('Elena');

// sacar del final 
let ultimo = nombres.pop();

// sacar del principio
let primer = nombres.shift(); 

// agregar al principio
nombres.unshift('Anna');

// Buscar la posición 
let position = nombres.indexOf('Elena');

// Eliminar en una posicion 
// Borra el elemento en la posición 2

// nombres.splice(2,1);
// console.log(nombres);

// realizar una copia 
let nuevoNombres = nombres.slice();

nuevoNombres.push('xxxx');
console.log(nuevoNombres);
console.log(nombres);

// Ordenar un array simple
nombres.sort();
console.log(nombres);

// Generar un array a partir de un string con split
let stringNombres = "Juan,Pedro,María,Julian";
let arrNombres = stringNombres.split(',');
console.log("Split");
console.log(arrNombres);

// Volver a unir
stringNombres = arrNombres.join(';');
console.log('Join');
console.log(stringNombres);

// Ejercicio 
// Dado un array de numeros enteros, multiplicar por 2 si es par y por 3 si es impar

// Ejercicio
// Dado un array de numeros enteros positivos, determinar el segundo mas grande
