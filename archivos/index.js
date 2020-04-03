const fs = require('fs');
const path = './inventors.json';

let datos = fs.readFileSync(path,'utf-8');

const inventor = {
    first: "Pablo",
    last: "Fernandez",
    year: 1976
}

datos = JSON.parse(datos);

datos.inventors.push(inventor);

fs.writeFileSync(path,JSON.stringify(datos,'','\t'), "utf-8");

console.log(datos.inventors);

//console.log(datos);

