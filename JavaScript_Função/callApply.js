function getPreco(imposto = 0, moeda = 'R$')
{
    return `${this.nome}, ${moeda} ${this.preco *(1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.nome = 'Contexto léxico global'
global.preco = 20;
global.desc = 0.1;
console.log(getPreco());
console.log(produto.getPreco());

const carro = { nome: 'Uno', preco: 49990, desc: 0.2 }
console.log(getPreco.call(carro)); //Chama a função em um contexto léxico definido
console.log(getPreco.apply(carro)); //Chama a função em um contexto léxico definido

console.log(getPreco.call(carro, 0.17, '$')); //Parâmetros passados um a um dentro da função
console.log(getPreco.apply(carro, [0.17, '$'])); //Parâmetros passados por um array

