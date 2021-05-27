const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./instanciaNova')(); //Retorna uma função
const contadorD = require('./instanciaNova')();

contadorA.inc();
contadorA.inc();
console.log(contadorB.valor); //Tudo que acontece no contador A é de 'conhecimento' de B através do cache

contadorC.inc();
contadorC.inc();
console.log(contadorD.valor); //Através da factory o que é retornado será sempre um novo objeto