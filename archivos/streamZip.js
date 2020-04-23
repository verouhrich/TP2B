const fs = require('fs');
const zlib = require('zlib');

// const pathOrigen = './big.txt';
// const pathDestindo = './big.txt.gz';

// let readable = fs.createReadStream(pathOrigen);
// let compress = fs.createWriteStream(pathDestindo);

// let gzip = zlib.createGzip();

// readable.pipe(gzip).pipe(compress);

//---------

let readableZip = fs.createReadStream('./big.txt.gz');
let unzip = zlib.createGunzip();
let deCompress = fs.createWriteStream('./bigDecompress.txt');

readableZip.pipe(unzip).pipe(deCompress);




