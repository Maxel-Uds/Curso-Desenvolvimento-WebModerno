console.log(module.exports === this); //O this é uma referência para a variável module.exports
console.log(module.exports === exports);

 //Significa que 'a', 'b' e 'c' agora são visíveis fora do arquivo
this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;
console.log(module.exports);

exports = { nome: 'Teste' }
console.log(module.exports);

module.exports = { publico: true } //Sempre que for preciso atribuir um novo objeto para ser exportado deve ser feito dessa forma