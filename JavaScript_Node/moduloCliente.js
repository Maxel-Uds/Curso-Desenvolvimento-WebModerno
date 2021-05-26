const moduloA = require('./moduloA'); //Função que importa dados de um arquivo determinado entre parêntesis. O "./" indica que está acessando o arquivo na mesma pasta.
const moduloB = require('./moduloB');

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);

console.log(moduloB.boaNoite());
console.log(moduloB.bomDia);
console.log(moduloB);