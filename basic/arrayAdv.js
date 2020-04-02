
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];


// Ejercicio: 
// 1.- filtrar los inventores nacidos antes del 1800
console.log();
console.log("Ejercicio 1.-");
console.log(inventors.filter(function(inventor) {
  return inventor.year > 1800;
}));

// Ejercio:
// 2.- Convertir el apellido en mayusculas
console.log();
console.log("Ejercicio 2.-");
console.log(inventors.map(function(inventor){
  return {first:inventor.first, last: inventor.last.toUpperCase(), year: inventor.year}
}));

// // Ejercicio
// // 3.- aplicar ambas cosas
console.log();
console.log("Ejercicio 3.-");
console.log(inventors
  .filter(inventor => inventor.year > 1800)
  .map(inventor => ({first:inventor.first, last: inventor.last.toUpperCase(), year: inventor.year}))
);


// //Ejercicio 
// // 4.- buscar inventor Kepler y retornar el objeto
console.log();
console.log("Ejercicio 4.-");
console.log(inventors.find(inventor => inventor.last = 'Kepler'));

// //Ejercicio
// // 5.- Alguno de los inventores nacio en 1858?
console.log();
console.log("Ejercicio 5.-");
console.log(inventors.some(inventor => inventor.year === 1858));

// //Ejercicio
// // 6.- Todos los inventores nacieron despues de 1500?
console.log();
console.log("Ejercicio 6.-");
console.log(inventors.every(inventor => inventor.year > 1400));


// //Ejercicio
// // 7.- Ordenar los inventores por fecha de nacimiento
console.log();
console.log("Ejercicio 7.-");
console.log(inventors.sort((a,b) => {
  if(a.year < b.year) 
    return 1
  else 
    return -1
}));

console.log(inventors.sort((a,b) => a.year - b.year));

// //Ejercicio
// // 8.- Ordenar los inventores por apellido
// console.log();
// console.log("Ejercicio 8.-");

// //Ejercicio
// // 9.- Convertir el array a un formato:
// //[{name: {first: 'first name',}}]
// /**
//  * [{name: 
//  *      {
//  *          first: 'first name',
//  *          last: 'last name'
//  *      }
//  * }, 
//  * year: year
//  * ]
//  * 
//  */
console.log();
console.log("Ejercicio 9.-");
console.log(inventors.map(inventor =>
  ({
    name: {first: inventor.first, last: inventor.last},
    year: inventor.year
  })
));


//ORDENAMIENTO
let arr = [ 40, 1, 5, 200 ];
//arr.sort();  //[ 1, 200, 40, 5 ]

// arr.sort(function (a, b) {
//   return a - b;
// });

arr.sort((a,b) => a -b);

console.log((arr));


let items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

items.sort((a,b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

console.log(items);
