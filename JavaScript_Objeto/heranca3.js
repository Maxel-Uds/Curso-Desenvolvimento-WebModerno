const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai); //Cria um objeto apontando para um protótipo determinado
filha1.nome = 'Ana';
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true},
});
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for(let key in filha2)
{
    filha2.hasOwnProperty(key)? //Função que retorna se uma propriedade pertence a um obj ou é herança de outro
    console.log(key) : console.log(`Por herança ${key}`);
}