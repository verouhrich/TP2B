// STREAMS
// Es una colecccion de datos, arrays strings. La diferencia es que se puede 
// manipular en pedazos

const fs = require('fs');
const path = './big.txt';
const pathDestino = './bigCopia.txt';


const readable = fs.createReadStream(path, {encoding: 'utf-8', highWaterMark: 1024});

// readable.on('data', chunk => {
//     console.log('---------------------------');
//     console.log(chunk.length);
//     console.log(chunk);
// });

// evento 'data', es emitido cuando el stream pasa un chunk
// evento 'end', es emitido cuando no hay mas datos 

const writable = fs.createWriteStream(pathDestino);

// PIPE: Conector de dos streams 
readable.pipe(writable);