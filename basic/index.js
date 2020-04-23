// function(exports, module, require, __filename, __dirname)
const util = require('./utils.js');

console.log(__dirname);
console.log(__filename);
console.log(module);

console.log(util.name);
console.log(util.sum(6,7));
console.log(util.rest(56,4));

// return module.exports;