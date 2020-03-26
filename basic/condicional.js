// Operadores de igualdad
// (==) igualdad sin verificar tipo


console.log(1 == 1);
console.log(1 == "1");
console.log('1' == 1);
console.log(0 == false);
console.log(0 == null);
console.log(0 == undefined);
console.log(null == undefined);

// (!=) desigualdad

// (===) igualdad verificando tipo

console.log(1 === 1);
console.log(1 === "1");
console.log('1' === 1);
console.log(0 === false);
console.log(0 === null);
console.log(0 === undefined);
console.log(null === undefined);

// condicionales

function clasifyAge(age){
    if(age < 13) {
        return age + " es un niño(a)";
    } else if(age < 20) {
        return age + " es un adolecente";
    } else if(age >= 20) {
        return age + " es un adulto.";
    } else {
        return "La entrada debe ser un numero."
    }
}

// Valores falsos
// false, undefined, null, 0 , NaN, '' (cadena vacia)
let a = true;
let b = false;
let c = "";

if(a) console.log("a es verdadero");
if(b) console.log("b es verdadero");
if(c) 
    console.log("c es verdadero"); 
else 
    console.log("c es falsa");

let d = 2;

d % 2 == 0 ? console.log("Es par"): console.log("es impar");

// switch
let key = 3;

switch (key) {
    case 2:
        console.log("A");
        break;
    case 3:
        console.log("B");
        break;
    case 4:
        console.log("C");
        break;
    case 5:
        console.log("D");
        break;
    default:
        console.log("E");
}