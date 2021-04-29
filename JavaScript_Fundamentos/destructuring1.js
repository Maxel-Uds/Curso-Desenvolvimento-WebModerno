//Novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa; //Representa o objeto a ser quebrado pelo operador destructuring
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobreNome, bemHumorada = true } = pessoa;
console.log(sobreNome, bemHumorada);

const { logradouro, numero } = pessoa.endereco;
console.log(logradouro, numero);