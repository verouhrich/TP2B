// declaración e inicializacion de un Array
let nombres = ['Juan', 'Pedro', 'Maria', 'Eduardo'];

let primerNombre = nombres[0];

let ultimoNombre = nombres[nombres.length - 1];

// iterar en un Array
// console.log('Itearar con for');
// for (let i = 0; i < nombres.length; i++) {
//     const nombre = nombres[i];
    
//     console.log(nombre);
// }

console.log('Iterar con for of');
for (const nombre of nombres) {    
    if(nombre == 'Pedro'){
        break;
    }
    console.log(nombre);
}

// // agregar elementos al final de un array
nombres.push('Elena');

// // sacar del final 
let ultimo = nombres.pop();

// // sacar del principio
let primer = nombres.shift(); 

// // agregar al principio
nombres.unshift('Anna');

// // Buscar la posición 
let position = nombres.indexOf('Elena');

// // Eliminar en una posicion 
// // Borra el elemento en la posición 2

nombres.splice(2,1);
console.log(nombres);

// // realizar una copia 
let nuevoNombres = nombres;
//let nuevoNombres = nombres.slice();

//nuevoNombres.push('xxxx');
console.log(nuevoNombres);
console.log(nombres);

// // Ordenar un array simple
nombres.sort();
console.log(nombres);

// // Generar un array a partir de un string con split
let stringNombres = "Juan,Pedro,María,Julian";
let arrNombres = stringNombres.split(',');
console.log("Split");
console.log(arrNombres);

// // Volver a unir
stringNombres = arrNombres.join(';');
console.log('Join');
console.log(stringNombres);

// // Ejercicio 
// // Dado un array de numeros enteros, multiplicar por 2 si es par y por 3 si es impar
let arrNum = [2,5,7,1];
for (let i = 0; i < arrNum.length; i++) {
    const element = arrNum[i];
    if(element % 2 == 0)
        arrNum[i] *= 2;
    else 
        arrNum[i] *= 3;
}
console.log(arrNum);


// // Ejercicio
// // Dado un array de numeros enteros positivos, determinar el segundo mas grande

let nums = [3,4,6,8,58,5,18,58];
let max = 0;
let secondMax = 0;

for (const num of nums) {
    if(num > max){
        secondMax = max;
        max = num;
    }
    else if(num > secondMax & num < max) {
        secondMax = num
    }
}
console.log(nums);
console.log(secondMax);
