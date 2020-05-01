const fs = require('fs');
const path = './inventors.json';

//let datos = fs.readFileSync(path,'utf-8');

fs.readFile(path, 'utf-8', (err, data) => {
    console.log(data);  
    let datos = JSON.parse(data); 
    fs.writeFileSync(path,JSON.stringify(datos), "utf-8");
});

//console.log('Termino de leer el archivo?');

// const inventor = {
//     first: "Pablo",
//     last: "Fernandez",
//     year: 1976
// }

// datos = JSON.parse(datos);

// datos.inventors.push(inventor);



// console.log(datos.inventors);

//console.log(datos);

