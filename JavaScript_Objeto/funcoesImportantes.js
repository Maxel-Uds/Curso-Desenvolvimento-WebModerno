const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); //Retorna as chaves de um objeto
console.log(Object.values(pessoa)); //Retorna os valores do objeto
console.log(Object.entries(pessoa)); //Retorna os pares chave/valor
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
}); //Define uma propriedade e suas características
console.log(pessoa);

//Object.assing (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2,); //Faz a concatenação dos objetos tendo o primeiro parâmetro como destino
console.log(obj);