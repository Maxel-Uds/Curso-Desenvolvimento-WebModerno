let valor; //Não inicializada
console.log(valor); //Sem valor definido

valor = null; //Ausência de valor, valor definido como nulo
console.log(valor);

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //Evitar
console.log(!!produto.preco);
console.log(produto);

produto.preco = null; //Sem preço
console.log(!!produto.preco);
console.log(produto);