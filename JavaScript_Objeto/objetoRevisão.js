//Coleção dinâmica de chaves/valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['Marca do produto'] = 'Genêrica'
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['Marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereço: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        { nome: 'Junior', idade: 19}, 
        {nome: 'Ana', idade: 42}
    ],
    calcularValorSeguro: function() {
        //...
    }
}

console.log(carro); 