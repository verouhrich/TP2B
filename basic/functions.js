// Tipos de declaración de funciones

// la forma mas simple
function add(a,b){
    return a + b;
}

// asignando a una variable
const square = function(x){
    return x*x;
}

square(x);

// Arrow Functions
// son siempre anonimas
// (parameter) => {statements}
// parameter => {statements}
// parameter => expression
// parameter => {return expression}
// (parameter1, parameter2, ...) => {statement}
// (parameter1, parameter2, ...) => expresion
// (parameter1, parameter2, ...) => {return expression}

const getSum = (a,b) => a + b;
console.log('suma: ', getSum(1,4));
