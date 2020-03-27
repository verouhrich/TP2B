// while
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

let i=0;
while (i < inventors.length) {
    console.log(inventors[i]);
    i++;
}

// do while
console.log('do while');
let j=0;
do {
    console.log(inventors[j]);
    j++;
} while (j < inventors.length);

//Ejercicio: dada una cadena por ejemplo 'javascriptloops' imprimir todas las vocales primero
// y a continuacion las consonantes.

let cadena = 'javascriptloops';
//cadena = cadena.toLocaleUpperCase();
let k = 0;
while (k < cadena.length) {
    switch (cadena[k].toLocaleUpperCase()) {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            console.log(cadena[k]);
            break;
        default:
    }
    k++;
}
k = 0;
while (k < cadena.length) {
    switch (cadena[k].toLocaleUpperCase()) {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            break;
        default :
            console.log(cadena[k]);
    }
k++;
}