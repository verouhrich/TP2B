// validator

const validator = require('validator');

console.log(validator.isEmail('pablof@tecnoshare.com'));

// chalk

const chalk = require('chalk');
console.log(chalk.red.bgRed("Hola mundo"));

console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));