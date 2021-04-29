const saudacao = 'opa';

function exec()
{
    const saudacao = 'Falaaaa';
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    } 
}

console.log(saudacao);
console.log(exec());
console.log(cliente);