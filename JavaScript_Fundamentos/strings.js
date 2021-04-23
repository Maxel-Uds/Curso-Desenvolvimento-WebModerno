const escola = "Cod3r";

console.log(escola.charAt(4)); //Traz a letra que está em um determinado índice
console.log(escola.charCodeAt(4)); //Traz o código da letra que está em um determinado índice
console.log(escola.indexOf('r')); //Traz o índice de determinado caractere que está em uma palavra
console.log(escola.substring(1)); //Corta a palavra a partir de determinado índice
console.log(escola.substring(0, 3)); //Corta a palavra a partir de determinado índice até um final determinado
console.log('Escola '.concat(escola).concat("!")); //Concatenação
console.log('Escola ' + escola + "!"); //Concatenação
console.log(escola.replace(3, 'e')); //Substitui o caractere de determinado índice
console.log('Maria,João,Ana'.split(',')); //Corta a string baseado em um determinado caractere