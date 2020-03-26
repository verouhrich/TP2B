// let vs Var 
// let es la forma moderna de declarar variables desde ES6
// el alcance de var es global y de let a nivel bloque
// let no permite declara dos veces var si!

let x = 1;
if (x === 1) {
  let x = 2; // otra variable
  console.log(x);
  // expected output: 2
}
console.log(x);
// expected output: 1

// const para declarar una constante

const key = 'abc123';
//key = 'abc123';
// para el caso de objetos
const person = {
    name: 'wes',
    age: 28
}  

const wes = Object.freeze(person);
// las propiedades si se pueden cambiar
//person.dir = 'donado';
wes.name = 'pablo';
console.log(wes);

